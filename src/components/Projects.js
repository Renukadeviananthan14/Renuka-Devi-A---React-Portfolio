import React from 'react';
import nfo from './project/NFO.PNG';
import pro1 from './spice.PNG';
import pro2 from './project 1.PNG';

const Projects = () => {
  return (
    <div id="projects">
    <h2 class="pro">Projects</h2>
    <div class="containerpro">
      <div class="card" style={{width: "18rem"}}>
  <img src={nfo} class="card-img-top" alt="book"/>
  <div class="card-body">
    <h5 class="card-title">Never Faded Obsession Book lauching website</h5>
    <p class="card-text">It designed by using HTML, CSS and Bootstrap. </p>
    <a href="https://never-faded-obsession-jessy.vercel.app/" class="btn btn-primary">View</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src={pro1} class="card-img-top" alt="book"/>
  <div class="card-body">
    <h5 class="card-title">Spice Delights</h5>
    <p class="card-text">It designed by using HTML, CSS, Bootstrap and JavaScript.
  This website developed for restaurant.
    </p>
    <a href="https://renukadeviananthan14.github.io/Spice-delight/" class="btn btn-primary">View</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src={pro2} class="card-img-top" alt="book"/>
  <div class="card-body">
    <h5 class="card-title">StartUp</h5>
    <p class="card-text">The home page designed for StartUp company using HTML, CSS and Bootstrap. </p>
    <a href="https://renukadeviananthan14.github.io/Landing-page-html-css/" class="btn btn-primary">View</a>
  </div>
</div>
    </div>
    </div>
  );
};

export default Projects;
