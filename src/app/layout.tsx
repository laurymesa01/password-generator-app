import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PasswordProvider from "./context/Context";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] , weight: ['700']});

export const metadata: Metadata = {
  title: "Password Generator App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <PasswordProvider>
          {children}
        </PasswordProvider>
      </body>
    </html>
  );
}
