import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://yana-frontend-dev.netlify.app/contact.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yana Zakharchenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yana-zakharchenko/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://peaceful-piroshki-003b30.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}