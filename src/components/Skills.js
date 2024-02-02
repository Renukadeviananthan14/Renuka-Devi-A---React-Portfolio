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
import linux from './icons8-linux-96.png';
import github from './icons8-github-480.png';
import centos from './icons8-centos-96.png';
import virtualbox from './icons8-virtualbox-logo-96.png';
import wordpress from './icons8-wordpress-240.png';
import Figma from './icons8-figma-240.png';
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
    <div class="col-6 col-sm-3"><img src={linux} height="70px" width="70px"></img></div>
    <div class="w-100"></div>

    <div class="col-6 col-sm-3"><img src={centos} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={virtualbox} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={Atom} height="70px" width="70px"/></div>
    <div class="col-6 col-sm-3"><img src={Figma} height="70px" width="70px"/></div>
  </div>
</div>
    </div>
  );
};

export default Skills;
