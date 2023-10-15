import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Firethree",
  description: "Firethree",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
