import React, { ReactNode } from "react";
import Navbar from "../organisms/Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-100">
      <Navbar />
      <main className="w-full py-8 max-w-5xl">{children}</main>
    </div>
  );
};

export default Layout;
