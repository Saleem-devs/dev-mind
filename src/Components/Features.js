import React from "react";
import FeaturesCard from "./FeaturesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBugSlash,
  faWaveSquare,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <>
      <section id="features" className="py-12 bg-textBlue">
        <div className="page_container">
          <h1 className="text-3xl font-bold text-center mb-14">Features</h1>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <FeaturesCard
              icon={<FontAwesomeIcon icon={faBugSlash} className="text-4xl" />}
              title="Code Completion and Debugging"
              description="Provides intelligent suggestions and real-time error highlighting that allow you to write and debug code with confidence, catching issues before they cause problems down the line. Spend more time building, and less time fixing."
            />
            <FeaturesCard
              icon={<FontAwesomeIcon icon={faWaveSquare} />}
              title="Solve Algorithms with Ease"
              description="Tackle complex algorithmic problems with confidence using DevMind. From sorting and searching to graph traversal and more, DevMind intelligent suggestions guide you through each step of the problem-solving process."
            />
            <FeaturesCard
              icon={
                <FontAwesomeIcon icon={faLaptopCode} className="text-4xl" />
              }
              title="Advanced Code Analysis"
              description="Advanced code analysis capabilities to provide developers with insightful suggestions and real-time error highlighting, enabling them to write better code."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
