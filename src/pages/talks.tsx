import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";

import BuildingGQLAPIForK8sResDescription from "./assets/talks/_building-gql-api-for-k8s-res.md";
import DevTeamCollaborationGitBestPracticesDescription from "./assets/talks/_dev-team-collaboration-git-best-practices.md";
import GraphQLInGoDescription from "./assets/talks/_graphql-in-go.md";

const talks: TalkMetadata[] = [
  {
    title: "Building Progressive Web Application in Production-Grade",
    description: <BuildingGQLAPIForK8sResDescription />,
    events: [
      {
        name: "Google I/O Extended Vietnam 2018",
        location: "Ho Chi Minh, Vietnam",
        date: new Date(2018, 6, 21),
      },
      {
        name: "Google for Startup Vietnam 2022",
        location: "Ho Chi Minh, Vietnam",
        date: new Date(2022, 10, 16),
      },
    ],
    recordingURL: "https://youtu.be/Evwmzpf8re4?t=138",
    slidesURL:
      "https://docs.google.com/presentation/d/15iCt-XpRm6eYFTtMlIuUA8r38tX4VZ3z-nq7PE7mpNs/edit?usp=sharing",
  },
  /* Starting to block other talks by pkosiec
  {
    title: "Development team collaboration: Git best practices",
    description: <DevTeamCollaborationGitBestPracticesDescription />,
    events: [
      {
        name: "SAP Labs Hack Your Career",
        location: "Gliwice, Poland",
        date: new Date(2019, 2, 26),
      },
    ],
    slidesURL:
      "https://docs.google.com/presentation/d/12Izhj479oZ7ilDsAgljwBBHXt4_cPsX120QZtf1hIA4/edit",
  },
  {
    title: "GraphQL in Go",
    description: <GraphQLInGoDescription />,
    events: [
      {
        name: "Gophers Silesia",
        location: "Katowice, Poland",
        date: new Date(2018, 4, 10),
      },
    ],
    recordingURL: "https://www.youtube.com/watch?v=NjFXLbJvZmQ",
    slidesURL:
      "https://docs.google.com/presentation/d/1v6H21vHMd_rAZ9qjXcags2dMR2OYR-kQkarNVJZxbOs/edit",
    repoURL: "https://github.com/pkosiec/golang-graphql-samples",
  },
  Ending to block other talks by pkosiec */
];

const title = "Talks";
const description = "Featured talks I presented on various events.";

export default function Talks(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {talks.map((talkData) => (
            <Talk key={talkData.title} {...talkData} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
