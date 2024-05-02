import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/app/ui/AppBar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FancyRide | Rent motorcycles or lend yours for cash",
  description: "Small pet project to practise latest web tech stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}
