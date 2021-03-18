import React, { useState } from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "French",
    value: "fr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
