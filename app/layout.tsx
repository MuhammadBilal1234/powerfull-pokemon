import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { ClerkProvider, auth } from "@clerk/nextjs";
import { Toaster } from "./component/ui/Toaster";
import { Navbar } from "./component/header";

const inter = Inter({ subsets: ["latin"] });

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "500", "400"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}  ${manrope.variable}`}>
          <Navbar hasUserLoggedIn={!userId} />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
