import React from "react";
import TestimonialCard from "./components/TestimonialCard";
import "./App.css";
function App() {
  return (
    <div>
      <h2 style={{ color: "blueviolet" }}>
        <TestimonialCard
          CustomerName="John"
          Review="Had a good experience.Highly recommended"
        />
      </h2>
      <h2 style={{ color: "wheat" }}>
        <TestimonialCard
          CustomerName="Kapish"
          Review="Can Improve their service"
        />
      </h2>
    </div>
  );
}

export default App;
