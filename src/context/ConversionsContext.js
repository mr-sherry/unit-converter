"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push, set, query, limitToLast, onValue } from "firebase/database";

// --- Context ---
const ConversionContext = createContext(null);

export const ConversionProvider = ({ children }) => {
  const [conversions, setConversions] = useState([]);

  // Save conversion to Firebase
  const saveConversion = async (conversion) => {
    try {
      const conversionsRef = ref(db, "conversions");
      const newRef = push(conversionsRef);
      await set(newRef, {
        ...conversion,
        createdAt: Date.now(),
      });
      console.log("Saved conversion:", conversion);
    } catch (error) {
      console.error("Error saving conversion:", error);
    }
  };

  // Listen for latest conversions
  useEffect(() => {
    const conversionsRef = ref(db, "conversions");
    const recentQuery = query(conversionsRef, limitToLast(10));

    const unsubscribe = onValue(recentQuery, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const parsed = Object.entries(data).map(([id, val]) => ({
          id,
          ...val,
        }));

        // Sort newest first
        parsed.sort((a, b) => b.createdAt - a.createdAt);
        setConversions(parsed);
      } else {
        setConversions([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ConversionContext.Provider value={{ conversions, saveConversion }}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversions = () => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error("useConversions must be used inside ConversionProvider");
  }
  return context;
};
