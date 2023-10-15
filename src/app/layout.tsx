import "../styles/globals.css";
import type { Metadata } from "next";
import { poppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Firethree - Solana dApp Starter",
  description:
    "Create a Solana dApp with collection, storage, analytics, hosting using this protocol! storage the data with @GenesysGo and Multisig by @SquadsProtocol. Yes it's similar to Fireb*** but 3x better!",
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
