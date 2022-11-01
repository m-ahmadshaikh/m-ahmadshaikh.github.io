import React from 'react';
import classes from './work.module.css';
function Work() {
  return (
    <div className="main">
      <h1>Recent Work</h1>

      <div className={classes.card}>
        <h2>Shopit - Ecommerce Single page webapp</h2>
        <p className={classes.desp}>
          Ecommerce Website made using React and Redux. Firebase Rest API used
          for backend.
        </p>
        <p className={classes.desp}>
          Users can make an account and place their orders.
        </p>
        <a href="https://github.com/m-ahmadshaikh/shop-it">Github Link</a>
        <a href="https://shop-it-575.netlify.app/">Deployed</a>
      </div>

      <div className={classes.card}>
        <h2>SocioSpack - A Social Media Web app</h2>
        <p className={classes.desp}>
          A social media website that is built using React, Express, GraphQL,
          and MongoDb.
        </p>
        <p className={classes.desp}>
          User can create and delete their posts and comments on other posts.
          They first have to sign up using a unique username and then they would
          be allowed to user additional funcitonalities.
        </p>
        <a href="https://github.com/m-ahmadshaikh/SociaSpark">Github Link</a>
        <a href="https://sociaspark.netlify.app/">Deployed</a>
      </div>
    </div>
  );
}

export default Work;
