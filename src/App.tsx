import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Links from './components/Links';
import getAssets from './components/getAssets';

type props = {photos?: string[], videos?: string[]};

type route = {
  path: string,
  component: React.FunctionComponent<props>,
}

function App() {
  const [photos, setPhotos] = useState<string[]>([])
  const [videos, setVideos] = useState<string[]>([])

  useEffect(() => {
    getAssets('videos')
      .then(videosArr => setVideos(videosArr.sort()))
      .then(() => getAssets('images'))
      .then(imagesArr => setPhotos(imagesArr.sort()))
      .catch(err => console.log(err));
  }, []);

  var routes: route[] = [
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/contact',
      component: Contacts
    },
    {
      path: '/links',
      component: Links
    },
    {
      path: '/',
      component: Home
    }
  ]

  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, i) => {
          return route.path === '/projects' ? (
            <Route key={i} path={route.path}>
              <route.component photos={photos} videos={videos}/>
            </Route>
          ) : (
            <Route key={i} path={route.path}>
              <route.component />
            </Route>
          );
        })}
      </Switch>
    </Router>

  );
}

export default App;