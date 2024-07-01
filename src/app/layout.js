import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone",
  description: "An App made using Next Js and Tailwind Css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
