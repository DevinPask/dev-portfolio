import React from 'react';
import coverImage from "../../assets/about/devpic.jpeg";

function About() {
  return (
    <section className="my-5">
    <h1 id="about">Who am I?</h1>
    <div className="aboutText">
    <img src={coverImage} className="aboutImg"  alt="cover" />
    <p className="aboutP">I’m a California-born and based Full Stack Developer and artist. I’m creative and use my design background in all elements of my projects. I enjoy problem solving along with creating visually appealing projects. I love all aspects of the creative process, from the aesthetics components to the actual structure and processes that make things work. I love the challenges I run into while coding, I love getting things to work. I’m a fan of using color in my projects along with thoughtful design that takes into account how it will be used. I really enjoy trying to push the envelope on my skills, it helps me keep invigorated as well as driving me to find new processes or ways of looking at things. In a way I think it keeps me feeling fresh and up to date.

In my spare time, I code, play hockey, watch cartoons, read comic books and graphic novels, act and play guitar, practice yoga and meditation, and spend time with my wife and two beautiful daughters.

</p>
    </div>
  </section>
  );
}

export default About;