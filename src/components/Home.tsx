import React from 'react';
import '../styles/Home.css';

type props = {profilePhoto: string}

const Home = ({profilePhoto}: props) => {
  console.log(profilePhoto);
  return (
    <section id='home-cont'>
      <div className='content'>
        <img src={profilePhoto} alt='profile' />
        <h1>Genaro V. Salinas</h1>
        <h3>Software Developer</h3>
      </div>
    </section>
  );
}

export default Home;