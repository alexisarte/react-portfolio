/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Calculator 🧮",
    description:
      "Calculator created in order to put into practice basic knowledge of HTML, CSS and JavaScript.",
    url: "https://alexisarte.github.io/calculator/",
  },
  {
    title: "Pokedex 📚",
    description:
      "Project carried out to learn how to do data fetching from a REST API, event management and DOM.",
    url: "https://alexisarte.github.io/pokedex/",
  },
  {
    title: "Inflation calculator 📈",
    description:
      "Project carried out in order to put into practice basic knowledge of backend (NodeJS, ExpressJs and JSON).",
    url: "https://inflation-calculator.azurewebsites.net/",
  },
  {
    title: "Games app 🎮",
    description:
      "Game application developed as a team as a final project for the language seminar (javascript) - faculty of informatics UNLP.",
    url: "https://games-app-x6ud8.ondigitalocean.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
