import React from "react";
import { Timeline, Event } from "react-timeline-scribble";
import experiences from "../data/work-experiences";
import "./Work.css";

function Work() {
  return (
    <div className="min-h-inherit px-6 py-24 sm:py-32 lg:px-8 flex gap-5 flex-col sm:flex-row">
      <h1 className="text-4xl">My Work Experience</h1>
      <div className="timeline w-[75%] min-w-[450px] mt-1.5">
        <Timeline>
          {experiences.map((exp, index) => (
            <Event
              key={index}
              interval={exp.date}
              title={exp.title}
              subtitle={exp.company}
            >
              <ul
                style={{
                  listStyleType: "disc",
                  marginLeft: "2rem",
                }}
              >
                {exp.contributions.map((contibution, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom:
                        index === exp.contributions.length - 1 ? "0" : "0.5rem",
                    }}
                  >
                    {contibution}
                  </li>
                ))}
              </ul>
            </Event>
          ))}
        </Timeline>
      </div>
    </div>
  );
}

export default Work;
