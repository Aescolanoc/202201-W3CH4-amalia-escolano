import { Header } from "./components/header.js";
import { Series } from "./components/series.js";

async function main() {
  new Header().renderInner("#header");
  const url = "http://localhost:3000/series";
  const data = await initialSeries();
  new Series(data);

  async function initialSeries() {
    const response = await fetch(url);
    return response.json();
  }
}

document.addEventListener("DOMContentLoaded", main);
