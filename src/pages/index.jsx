import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import Layout from "../layout/layout";
import Seo from "../layout/seo";
import Hero from "./index/hero";
import Steps from "./index/steps";
import Selection from "./index/selection";
import Values from "./index/values";
import Testemonials from "./index/testemonials";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.batch(".fade-in", {
      start: "middle 90%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          duration: 1.2,
          y: "-10",
          stagger: 0.3,
          ease: "power4.out",
        }),
    });
  });

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Steps />
      <Selection />
      <Values />
      <Testemonials />
    </Layout>
  );
};

export default Index;
