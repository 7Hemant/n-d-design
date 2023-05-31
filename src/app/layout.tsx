import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex ">
          <div className="w-[20%] fixed left-0 ">
            <SideBar />
          </div>
          <div className="ml-[20%] w-[80%]   self-end   ">
            <Header />
            <div className="mt-[5%]"> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
