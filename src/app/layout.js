import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ConversionProvider } from "@/context/ConversionsContext";
import TopLoader from "@/components/TopLoader";
import { BlogProvider } from "@/context/BlogContext";

export const metadata = {
  title: "Unit Converter",
  description: "All Units Convertions in one Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BlogProvider>
          <ConversionProvider>
            <Header />
            <TopLoader />
            {children}
            <Footer />
          </ConversionProvider>
        </BlogProvider>
      </body>
    </html>
  );
}
