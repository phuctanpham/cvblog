import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Gcalls",
    description: "An integrated and programbale contact center.",
    url: "https://gcalls.co",
    image: require(`${assetsDir}/gcalls.png`),
    role: "CTO",
  },
  {
    title: "Capbull",
    description:
      "Banking driven Cashflow Management for multi-level finanical team.",
    url: "https://marvelapp.com/prototype/792b0ib/screen/36814695",
    image: require(`${assetsDir}/capbull.png`),
    role: "Solution Architect",
  },
  {
    title: "Terminer",
    description: "Upgrade your terminal experience with a single command.",
    url: "https://github.com/pkosiec/terminer",
    image: require(`${assetsDir}/terminer.png`),
    role: "Author",
  },
  {
    title: "Gophers Silesia",
    description: "Go & Cloud Native Meetup organized in Katowice, Poland",
    url: "https://www.meetup.com/GophersSilesia",
    image: require(`${assetsDir}/gophers-silesia.png`),
    role: "Organizer",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function Projects(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
