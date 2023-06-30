"use client"
import React from "react";
import "../assets/styles/css.css";
import "../assets/styles/classes.css";

export default function Home() {
  return (
    <main>
      <main>
        <h1 className={"pageTitle"}>generate</h1>

        <div className="generation-card">
          <div className="generate-inputs">
            <span>how many invites do you wish to generate? (yes i stole your textboxes pixel) <input id={"invite-number"} type={"text"} placeholder={"10"}></input></span>
            <a>generate (ignore the placement of this, trying to figure out how to make it go under this shit</a>
          </div>
        </div>
      </main>
    </main>
  );
}
