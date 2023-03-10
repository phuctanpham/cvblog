import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Phu</span>,
          <br />
          Tech Entrepreneur.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          An engineer interested in Customer Success, SaaS and Opensource.
          <br /> I believed to open more modern jobs and micro degrees by
          enterprise driven technologies.
        </p>
      </div>
    </header>
  );
};
