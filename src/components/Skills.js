import React from 'react';
import HTML from './html-5.png';
import CSS from './css-3.png';
import JS from './js.png';
import PHP from './php.png';
import SQL from './mysql.png';
import Atom from './atom.png';
import Bootstrap from './bootstrap.png';
import python from './icons8-python-480.png';
import flask from './icons8-flask-250.png';
import tail from './tailwind.png';
import github from './icons8-github-480.png';
import electron from './electron.png';
import wordpress from './icons8-wordpress-240.png';
import Figma from './icons8-figma-240.png';
import git from './git icon.png';
import Nxt from './nxt.jpg';

const Skills = () => {
  return (
    <div id="skills">
    <h2 class="skill">Skills</h2>
    <div class="container text-center">
    <div class="row" id="row">
    <div class="col-6 col-sm-3"><img src={HTML} height="70px" width="70px"></img> </div>
    <div class="col-6 col-sm-3"><img src={CSS} height="70px" width="70px"></img> </div>
    <div class="col-6 col-sm-3"><img src={JS} height="70px" width="70px"></img> </div>
    <div class="col-6 col-sm-3"><img src={PHP} height="70px" width="70px"></img> </div>
    <div class="w-100"></div>

    <div class="col-6 col-sm-3"><img src={SQL} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={wordpress} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={Bootstrap} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={Nxt} height="70px" width="70px"></img></div>

    <div class="col-6 col-sm-3"><img src={python} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={flask} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={github} height="70px" width="70px"></img></div>
    <div class="col-6 col-sm-3"><img src={tail} height="70px" width="70px"></img></div>
    <div class="w-100"></div>

    <div class="col-6 col-sm-3"><img src={git} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={electron} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={Atom} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={Figma} height="70px" width="70px"/></div>
  </div>
</div>
    </div>
  );
};

export default Skills;
