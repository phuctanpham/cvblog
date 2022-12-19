import React from "react";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";

const assetsDir = "./assets/projects";
const projects: ProjectData[] = [
  {
    title: "Gcalls Dev",
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
    title: "JS Viet",
    description: "A vietnamese opensource group for Javascript Lover.",
    url: "https://www.facebook.com/groups/vnnodejs",
    image: require(`${assetsDir}/jsviet.png`),
    role: "Admin",
  },
  {
    title: "Startup Insider",
    description: "Startup Insider organized in Ho Chi Minh, Vietnam",
    url: "https://docs.google.com/presentation/d/e/2PACX-1vQZCb48z4EyCX4Zcgw8KWzaWalY1orWnYH6NYNBTgHWOq0fvw-X-Dxtv2S0yAg6Eg/pub?start=true&loop=true&delayms=3000",
    image: require(`${assetsDir}/startupinsider.png`),
    role: "Creator",
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
