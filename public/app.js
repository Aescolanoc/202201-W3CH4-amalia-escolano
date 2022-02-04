import { Header } from "./components/header.js";
import { Series } from "./components/series.js";

const main = function () {
  new Header().renderInner("#header");
  const url = "http://localhost:3000/series";

  initialSeries().then((data) => {
    if (!localStorage.getItem("series")) {
      localStorage.setItem("series", JSON.stringify(data));
    }
    new Series();
  });

  function initialSeries() {
    return fetch(url).then((response) => {
      //resp => resp.json()
      return response.json();
    });
  }
};

document.addEventListener("DOMContentLoaded", main);
