import React from "react";
import style from "./Main.scss";
import { TypeAnimation } from "react-type-animation";
import sticker from "../../assets/sticker.png";

function Main() {
  return (
    <div>
      <div className="container__main">
        <div className="container__type">
          <div className="typeanimation">
            <h2 className="title_of_type">Hello, I am</h2>

            <TypeAnimation
              className="type"
              sequence={[
                "Tilek",
                2000,
                "Software engineer",
                2000,
                "UX/UI Designer",
                2000,
                "Web developer",
                2000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                display: "inline-block",
                fontFamily: "sans-serif",
                fontWeght: "bold",
              }}
            />
          </div>
          <div className="container_img">
            <img className="img" src={sticker} />
          </div>
        </div>
        <div className="buttons">
          <button className="buttons__first">Hire me</button>
          <button className="buttons__second">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
