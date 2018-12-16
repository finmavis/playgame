import React, { Fragment } from 'react';
import Home from './Home/Home';
import Tech from './Tech/Tech';
import News from './News/News';
import Event from './Event/Event';
import Games from './Games/Games';
import Footer from './Footer/Footer';

const Main = props => (
  <Fragment>
    <Home />
    <Tech />
    <News />
    <Event />
    <Games />
    <Footer />
  </Fragment>
);

export default Main;
