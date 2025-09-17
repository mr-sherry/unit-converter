"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const BlogContext = createContext();

// Provider component
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from your API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://converter.miftatech.com/api/blogs"); // Replace with your API
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook for easier use
export const useBlogs = () => useContext(BlogContext);
