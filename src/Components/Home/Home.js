import React from "react";
import Feature from "../Feature/Feature";
import Hero from "../Hero/Hero";
import HomePageService from "../HomePageService/HomePageService";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <HomePageService></HomePageService>
    </div>
  );
};

export default Home;
