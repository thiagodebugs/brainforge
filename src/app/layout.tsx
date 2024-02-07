import { Plus_Jakarta_Sans } from "next/font/google";
import { Baseboard, Navbar } from "@/components";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Brainforge",
  description: "Desvende a sua jornada completa de evolução.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={plusJakartaSans.className}>
        <Navbar>{children}</Navbar>
        <Baseboard />
      </body>
    </html>
  );
}
