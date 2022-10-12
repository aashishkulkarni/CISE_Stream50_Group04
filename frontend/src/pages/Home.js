import React from "react";
import Logo from "../logo/SPEED_logo.png";
const Home = () => {
  return (
    <div>
      <img
        src={Logo}
        style={{ alignItems: "center", justifyContent: "center" }}
        alt="SPEED_logo"
        sx={{ width: 50, height: 50, p: 3, m: 3 }}
      ></img>
      <h1> What is SPEED ?</h1>
      <h2> Introduction </h2>
      <p sx={{ fontSize: ' 40' }}> SPEED is a website which shows the various articles submitted by the user. These articles are then verified by the moderators who either accept or reject the article.
        'React.js' has been used for designing the front-end aspects of the website
        'Node.js' is implemented to handle the back-end aspects and 'MongoDB' has been used to store article details in the database.
      </p>
      <h2> Purpose </h2>
      <p>It is a searchable database of evidence about different claims about different SE practices.</p>
      <h2>Steps to publish article </h2>
      <ul>Step 1: Click on 'Submit Article' tab </ul>
      <ul>Step 2: Fill out the details regarding the article</ul>
      <ul>Step 3: Wait for the moderator to review the article </ul>
      <ul>Step 4: If the moderator accepts the article, then check if it is visible in the 'Select the Practice' tab </ul>

      <h2> Role of Moderator </h2>
      <p> The moderator will evaluate the articles submitted by the user. After evaluation, the moderator may either accept or decline the article</p>
      <p> The published article will be visible in the 'Select the Practice' tab </p>
    </div >
  );
}

export default Home;