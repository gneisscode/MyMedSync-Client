import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProviders } from "@providers"
const inter = Inter({ subsets: ["latin"] });
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "MyMedSync",
  description: "Medical Records Storage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
