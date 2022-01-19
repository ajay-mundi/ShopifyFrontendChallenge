import React from "react";
import NavBar from "../NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>About Us</h1>
      <br></br>
      <hr></hr>
      <p>This site was built by</p>
      <a href="https://www.linkedin.com/in/ajay-mundi-195838181/">Ajay Mundi</a>
      <p>
        using the React library for the Shopify Frontend Challenge 2022. Photos
        are courtesy of NASA's Astronomy Picture of the Day (APOD) API. For more
        information about the API please visit
      </p>
      <a href="https://api.nasa.gov">https://api.nasa.gov.</a>
    </div>
  );
};

export default AboutPage;
