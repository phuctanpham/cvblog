import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Phuc</span>,
          <br />
          Tech Entrepreneur.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Customer Success engineer interested in SaaS and Opensource.
          <br /> He is also a technical writter.
        </p>
      </div>
    </header>
  );
};
