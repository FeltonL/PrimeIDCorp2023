import React from "react";
import PrimeID from "./mainpages/primeid/Prime"
import Joinprime from "./mainpages/joinprime/Joinprime";
import Team from "./mainpages/team/Team";
import Signup from "./mainpages/contact/Signup";
import MainHome from "./mainpages/mainhome/Mainhome";

const Home = () => {
  return (
    <>
      <MainHome/>
      <PrimeID/>
      <Joinprime/>
      <Team/>
      <Signup/>
    </>
  );
};
export default Home;