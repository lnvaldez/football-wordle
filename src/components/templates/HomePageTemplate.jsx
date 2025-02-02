import React from "react";
import HomePageContent from "../organisms/HomePageContent";

const HomePageTemplate = (props) => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
    <HomePageContent {...props} />
  </div>
);

export default HomePageTemplate;
