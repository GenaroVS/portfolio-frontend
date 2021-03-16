import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Links from './components/Links';
import getAssets from './components/getAssets';

function App() {
  const [photos, setPhotos] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])
  const [profile, setProfile] = useState<string>('');

  useEffect(() => {
    getAssets('videos')
      .then(videosArr => setVideos(videosArr.sort()))
      .then(() => getAssets('images/other'))
      .then(images => setProfile(images[0]))
      .then(() => getAssets('images/projects'))
      .then(imagesArr => setPhotos(imagesArr))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/projects'>
          <Projects photos={photos} videos={videos}/>
        </Route>
      </Switch>
      <Switch>
        <Route path='/contact'>
          <Contacts/>
        </Route>
      </Switch>
      <Switch>
        <Route path='/links'>
          <Links/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/'>
          <Home profilePhoto={profile}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;