import React from "react";
import Users from "../components/Users";
import UserClass from "../components/UserClass";

const AboutUs = () => {
  return (
    <>
      <h3>AboutUs</h3>
      <Users name={"John Doe"} location={"Deheradune"}/>
      <UserClass  name={"John Doe"} location={"Deheradune"} />
    </>
  );
};

export default AboutUs;
