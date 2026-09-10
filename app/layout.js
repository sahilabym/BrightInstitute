import "./globals.css";
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
    default: "Bright Institute — Higher Learning",
    template: "%s | Bright Institute",
  },
  description:
    "Bright Institute offers world-class undergraduate and postgraduate programs across sciences, arts, and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className}`}>
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
