import { Component } from "./component.js";

export class Series extends Component {
  template;
  constructor() {
    super();

    this.series = JSON.parse(localStorage.getItem("series"));
    this.seriesPending = [];
    this.seriesWatched = [];

    this.series.forEach((element) => {
      if (element.watched === true) {
        this.seriesWatched.push(element);
      } else {
        this.seriesPending.push(element);
      }
    });
    localStorage.setItem("pending", JSON.stringify(this.seriesPending));
    localStorage.setItem("watched", JSON.stringify(this.seriesWatched));
    this.seriesPending = JSON.parse(localStorage.getItem("pending"));
    this.seriesWatched = JSON.parse(localStorage.getItem("watched"));
    console.log(this.seriesPending);
    console.log(this.seriesWatched);
    this.template = this.generateTemplate();
    this.renderInner("#series-section");
  }
  generateTemplate() {
    let template = `
      <h2 class="section-title">Series list</h2>
      <section id="pending" class="series-pending"> 
      <h3 class="subsection-title">Pending series</h3>
      <p class="info">You have ${this.seriesPending.length} series pending to watch</p>
      <ul class="series-list">`;
    //template pending series
    this.seriesPending.forEach((element) => {
      template += `
          <li class="serie">
          <img
            class="serie__poster"
            src="${element.poster}"
            alt="${element.name} poster"
          />
          <h4 class="serie__title">${element.name}</h4>
          <p class="serie__info">${element.creator} ${element.year}</p>
          <ul class="score">
            <li class="score__star">
              <i class="icon--score fas fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="2/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="5/5"></i>
            </li>
          </ul>
          <i class="fas fa-times-circle icon--delete"></i>
        </li>`;
    });
    template += `</ul></section>`;
    //Template wtched series
    template += `<section class="series-watched">
      <h3 class="subsection-title">Watched series</h3>
      <p class="info">You have watched ${this.seriesWatched.length} series</p>
      <ul class="series-list">`;

    this.seriesWatched.forEach((element) => {
      template += `
          <li class="serie">
          <img
            class="serie__poster"
            src="${element.poster}"
            alt="${element.name} poster"
          />
          <h4 class="serie__title">${element.name}</h4>
          <p class="serie__info">${element.creator} ${element.year}</p>
          <ul class="score">
            <li class="score__star">
              <i class="icon--score fas fa-star" title="1/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="2/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="3/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="4/5"></i>
            </li>
            <li class="score__star">
              <i class="icon--score fas fa-star" title="5/5"></i>
            </li>
          </ul>
          <i class="fas fa-times-circle icon--delete"></i>
        </li>  
        `;
    });
    template += `</ul></section>`;

    return template;
  }
}
