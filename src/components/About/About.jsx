import React from "react";
import style from "./About.scss";
import img from "../../assets/about_me.jpeg";

function About() {
  return (
    <div className="main__about">
      <div className="main__about_text">
        <h2>About me</h2>
        <p>
          I'm a software engineer with a robust background in front-end
          development, dedicated to creating intuitive and visually appealing
          user experiences. My passion extends to the fascinating world of
          computer science, where I explore algorithms, data structures, and
          problem-solving strategies. Currently studying at "Collegium Da Vinci"
          university, my tech enthusiasm is complemented by a curiosity for
          diverse cultures and a keen interest in networking. I believe these
          experiences foster creativity and open doors to new opportunities.
          Thriving in collaborative environments, I've honed my skills through
          hands-on projects and online courses, adapting quickly to emerging
          technologies and industry trends.
        </p>
      </div>

      <div className="main__about__img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default About;
