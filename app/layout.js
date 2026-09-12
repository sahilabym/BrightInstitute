import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Bright School — Nursery to Grade 12",
    template: "%s | Bright School",
  },
  description:
    "Bright School offers CBSE-affiliated, holistic K–12 education from Pre-Primary to Grade 12 across Science, Commerce, and Humanities streams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className}`}>
      <head>
        <script
          async
          // src="https://cdn.digitalanumati.com/uat/v1/anumati-dpdp-consent-v1.js"
          src="http://localhost:4173/anumati-dpdp-consent-v1.js"
          data-site-key="APP_httpsbright-school-webvercelapp_1789037524790"
          application-id="d522836a-b10d-42e6-a9e0-35a69ba030d4"
        ></script>
      </head>
      <body className="min-h-screen flex flex-col bg-[#f7f9fd] font-sans antialiased text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#0c214f",
              color: "#fff",
              fontFamily: "var(--font-poppins), Poppins, system-ui, sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
