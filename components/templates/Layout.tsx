import React, { Children, ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "../organisms/Navbar";

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: Props) => {
  return (
    <div
      className={`${inter.className} min-h-screen flex flex-col items-center bg-slate-100`}
    >
      <Navbar />
      <main className="w-full py-8 max-w-5xl">{children}</main>
    </div>
  );
};

export default Layout;
