import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Button from "../../components/button";
import WaveOne from "../../assets/svg/waveOne.svg";
import ArrowForward from "../../assets/svg/arrow-forward.svg";

const Selection = () => {
  return (
    <section className="selection">
      <div className="inner">
        <div className="content fade-in">
          <p>
            For every dish <br className="break" /> there is a story.
          </p>
          <h1 className="header fade-in">
            We have <br className="break" /> an ulimited selection of high
            quality dishes
          </h1>
          <p className="paragraph fade-in">
            Mattis tristique nunc, metus malesuada consequat, suspendisse. Nam
            vel quis proin diam egestas. Id massa sit tortor at quis.
          </p>
          <Button className="primary large fade-in" to="/">
            See All Dishes <ArrowForward />
          </Button>
        </div>

        <div className="content dishes-container">
          <div className="dishes-B fade-in">
            <StaticImage
              layout="fixed"
              width={900}
              quality={95}
              placeholder="none"
              src="../../assets/images/dishes-B.png"
              alt="selection of food"
            />
          </div>

          <div className="dishes-B-mobile ">
            <StaticImage
              layout="fullWidth"
              quality={100}
              placeholder="none"
              src="../../assets/images/dishes-B-mobile.png"
              alt="selection of food"
            />
          </div>

          <WaveOne className="wave-one" />

        </div>
        <div
          className="headline content"
          style={{
            textAlign: "center",
            maxWidth: "535px",
          }}>
          <h2 className="fade-in">
            Our every dish is curated with the best ingredients
          </h2>
          <p className="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum id semper auctor molestie
          </p>
        </div>

      </div>
    </section>
  );
};

export default Selection;
