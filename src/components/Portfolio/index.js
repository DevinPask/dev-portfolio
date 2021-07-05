import React from 'react';
import img1 from "../../assets/small/finfitness.jpeg";
import img2 from "../../assets/small/ocp.jpeg";
import img3 from "../../assets/small/weather.jpeg";
import img4 from "../../assets/small/tblog.jpeg";
import img5 from "../../assets/small/pword.jpeg";
import img6 from "../../assets/small/runbuddy.jpeg";
import img7 from "../../assets/small/horiseon.jpg";
import img8 from "../../assets/small/placeholder3.jpeg";
import img9 from "../../assets/small/placeholder4.jpeg";





function Portfolio() {
  return (
    <div >
      <h1 className="underline">Portfolio:</h1>
      <div className="flex-row">
        <div className="portborder">
          <h2>Get Active Fitness App</h2>
          <a href="https://devinpask.github.io/Fitness-App/"
          target= "blank"
          >
          <img
            src={ img1 }
            alt=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">A simple workout app for finding activities in your area.</p>
        </div>
        <div className="portborder">
          <h2>Outcast-Movie-Quiz-App</h2>
          <a href="https://outcast-movie-quiz.herokuapp.com/"
          target= "blank"
          >
          <img
            src={ img2 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
           </a>
            <p className="max">Take a movie quiz based on genre. Try to top the high score! Login and play.</p>
        </div>
        <div className="portborder">
          <h2>Weather App</h2>
          <a href="https://devinpask.github.io/weather-app/"
          target= "blank"
          >
          <img
            src={ img3 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">Check local weather as well as 5 day forecast.</p>
        </div>
        <div className="portborder">
          <h2>Dev-Tech Blog App</h2>
          <a href="https://damp-brook-52831.herokuapp.com/"
          target= "blank"
          >
          <img
            src={ img4 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">Simple Tech blog, login, post, comment.</p>
        </div>
        <div className="portborder">
          <h2>Password Generator App</h2>
          <a href="https://devinpask.github.io/Password-Generator-/"
          target= "blank"
          >
          <img
            src={ img5 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">Generates a random password of numbers, letters, and characters.</p>
        </div>
        <div className="portborder">
          <h2>Run Buddy Site</h2>
          <a href="https://devinpask.github.io/run-buddy/"
          target= "blank"
          >
          <img
            src={ img6 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">Running Website</p>
        </div>
        <div className="portborder">
          <h2>Seo Site</h2>
          <a href="https://devinpask.github.io/horiseon/"
          target= "blank"
          >
          <img
            src={ img7 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">Seo website with signup page</p>
        </div>
        <div className="portborder">
          <h2>Placeholder</h2>
          <a href="/"
          target= "blank"
          >
          <img
            src={ img8 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
             </a>
            <p className="max">App Description</p>
           
        </div>
        <div className="portborder">
          <h2>Placeholder</h2>
          <a href="/"
          target= "blank"
          >
          <img
            src={ img9 }
            alt=""
            href=""
            className="img-thumbnail mx-1" />
            </a>
            <p className="max">App Description</p>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;