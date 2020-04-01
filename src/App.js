import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name = 'Juanita Phillips'
        online
        avatar="https://randomuser.me/api/portraits/women/55.jpg"
      />
      <Contact
        name = 'Erica Hunt'
        avatar="https://randomuser.me/api/portraits/women/87.jpg"
      />
      <Contact
        name="Nellie Caldwell"
        online
        avatar="https://randomuser.me/api/portraits/women/17.jpg"
      />
    </div>
  );
}
export default App;
