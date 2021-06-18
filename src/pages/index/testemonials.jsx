import * as React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

const Testemonials = () => {
  return (
    <section className="testemonials">
      <div className="inner">
        <div className="content fade-in">
          <p>
            For every dish <br className="break" /> theres a story.
          </p>
          <h2>Helping over 1,400 people maintain a healthy diet</h2>
        </div>
        <div className="content carousel desktop">
          <Carousel
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            showArrows={false}
            transitionTime={300}
            interval={5000}
            swipeScrollTolerance={50}
            centerSlidePercentage={60}
            centerMode={true}
            autoPlay={true}>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/naomi.png"
                alt="Naomi"
                quality={90}
              />

              <h1>Naomi</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
          </Carousel>
        </div>

        <div className="content carousel mobile">
          <Carousel
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            verticalSwipe={"natural"}
            showArrows={false}
            transitionTime={300}
            interval={5000}
            swipeScrollTolerance={50}
            centerSlidePercentage={100}
            centerMode={false}
            autoPlay={true}>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/naomi.png"
                alt="Naomi"
                quality={90}
              />
              <h1>Naomi</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
            <div className="testemonial">
              <StaticImage
                className="testemonial-image"
                layout="fixed"
                placeholder="blurred"
                src="../../assets/images/testemonials/lara.png"
                alt="Lara"
                quality={90}
              />

              <h1>Lara</h1>
              <p>
                Faucibus ultricies consectetur odio tellus. Arcu, nibh
                adipiscing quis netus massa cursus. Eu enim odio vel tortor cum.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
