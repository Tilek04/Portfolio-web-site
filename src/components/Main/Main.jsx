import React from "react";
import style from "./Main.scss";
import { TypeAnimation } from "react-type-animation";

function Main() {
  return (
    <div>
      <div className="container__main">
        <div className="container__type"></div>
        <div className="container__image">
          <div className="typeanimation">
            <h2>I am</h2>

            <TypeAnimation
              sequence={[
                "Tilek",
                2000,
                "Software engineer",
                2000,
                "Designer",
                2000,
                "Inventor",
                2000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "5em", display: "inline-block", color: "white"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
