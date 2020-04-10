import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name = "gean"
        avatar="https://randomuser.me/api/portraits/women/55.jpg"
        online
      />
      <Contact
        name = 'Erica Hunt'
        avatar="https://randomuser.me/api/portraits/women/87.jpg"
        online
      />
      <Contact
        name="Nellie Caldwell"
        avatar="https://randomuser.me/api/portraits/women/17.jpg"
      />
    </div>
  );
}
export default App;
