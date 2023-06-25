import React from "react";
import Header from "../atoms/Heading";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="py-8 w-full bg-sky-400 text-white">
      <div className="max-w-5xl mx-auto">
        <Header>Todo List App</Header>
      </div>
    </header>
  );
};

export default Navbar;
