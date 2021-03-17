import React from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";

const items = [
  {
    title: "What is React?",
    content: "React is a Frontend Framework",
  },
  {
    title: "Why use React",
    content: "React is trending",
  },
  {
    title: "How do you use React",
    content: "By creating componenets",
  },
];

export default () => {
  return (
    <div>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};
