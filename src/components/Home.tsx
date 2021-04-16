import React from 'react';
import '../styles/Home.css';
import { skills } from '../data/index'

type props = {profilePhoto: string}

const Home = ({profilePhoto}: props) => {
  return (
    <section id='home-cont'>
      <div className='content'>
        <h1>Genaro V. Salinas</h1>
        <h3>Software Developer</h3>
        <p>
          A fellow Houston, Texas native looking to launch my career as a software engineer. I'm a recent Finance graduate from Texas A&M University who realized that I wanted to build great ideas instead of analyzing or funding great ideas. Since then, I joined Hack Reactor and now I'm ready to go from the language of business to the language of computers!
        </p>

      </div>
      <div id='conveyor-display'>
        <div id='conveyor'>
          {skills.map(skill => {
            return <div className='skill'>{skill}</div>
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;