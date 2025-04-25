import { Fragment, Suspense } from 'react';
import Hero from '../components/Layouts/Hero';
import Navbar from '../components/Layouts/Navbar';
import SplashCursor from '../components/ReactBits/SplashCursor/SplashCursor';

const Home = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <SplashCursor />
    </Fragment>
  );
};

export default Home;
