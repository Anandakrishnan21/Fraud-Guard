import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "dark:bg-neutral-950")}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
