import { Header } from "./components/header.js";
import { Series } from "./components/series.js";

const main = function () {
  new Header().renderInner("#header");
  const url = "http://localhost:3000/series";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!localStorage.getItem("series")) {
        localStorage.setItem("series", JSON.stringify(data));
      }
      new Series();
    });
};

document.addEventListener("DOMContentLoaded", main);
