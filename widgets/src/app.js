import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import Dropdown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
};

export default App;
