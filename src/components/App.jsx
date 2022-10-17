import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function createEntry(emoji) {
  return (
    <Entry
      id={emoji.id}
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
