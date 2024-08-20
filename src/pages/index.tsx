import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import heroBg from "../components/heroBg.svg";

import styles from "./index.module.css";
import CodeSnippet from "../components/CodeSnippet";
import Section from "../components/Section";
import HomepageProducts from "../components/HomepageProducts";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const code = `// creating a virtual card \n
curl --request POST 
  --url https://sandbox.baseone.co/cards/v1/create-card 
  --header 'accept: application/json' 
  --header 'content-type: application/json'
  `;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className=" font-sans flex flex-col bg">
        <Section
          id="hero"
          bg={heroBg}
          className="flex max-lg:flex-col gap-1 items-center px-40 max-lg:px-0 py-12 bg-[#E9EFFF] dark:text-white d "
        >
          {/* <HomepageHeader /> */}
          <div className="w-[50%] max-lg:w-full flex flex-col items-start max-lg:items-center max-lg:text-center md:w-[90%] sm:w-[90%] mx-auto relative z-1  mb-[4rem] max-lg:mb-[1rem] max-lg:p-2 md:mb-0 lg:mb-[rem] leading-7 ">
            <a href="" className="no-underline">
              <div className="flex gap-2 justify-center items-center px-2 py-1 border border-[#175fff] rounded-full object-contain text-sm max-sm:text-xs">
                <span>
                  <img src="" width="" alt="" />
                </span>
                <span className="text-[#175fff]  no-underline">
                  Reconciliation is here! 🎉
                </span>
              </div>
            </a>

            {/* <p </p> */}
            <h1 className="flex flex-col mb-6 text-6xl font-bold font-sans, max-sm:text-4xl max-md:text-4xl text-[#0A2540]  max-lg:text-4xl">
              BaseOne Docs:{" "}
              <span className="text-[#175fff] text-5xl max-lg:text-3xl ">
                Your all-in-one fintech shop
              </span>
            </h1>

            <p className="pb-6  max-lg:pb-3 text-xl font-semibold text-[#0A2540] ">
              Idea to Launch in Minutes
            </p>
            {/* <p className="pb-6">
              Learn how to integrate BaseOne services into your products.We
              provide all the services you need to launch and manage your
              fintech products in the shortest possible time. We also walk you
              through the journey.
            </p> */}
            <div className="flex gap-4 text-lg font-bold">
              <a
                href=""
                className="rounded-xl py-3 normal-case border-2 border-[#175fff] text-[#175fff]  px-6 max-lg:px-4 max-lg:py-1 max-lg:text-md"
              >
                <span>Guides</span>
              </a>
              <a
                href=""
                className="rounded-xl py-3 normal-case border-2 border-[#175fff] text-[#175fff]  px-6 max-lg:px-4 max-lg:py-1 max-lg:text-md"
              >
                API Reference
              </a>
            </div>
          </div>
          <div className=" max-md:text-md max-sm:px-6 max-sm:text-xs dark:text-[#0A2540]">
            <CodeSnippet code={code} />
          </div>
        </Section>

        <section className="flex max-md:flex-col py-12 justify-center gap-4 px-32 max-lg:px-2 text-white">
          <HomepageProducts
            title={"Accounts"}
            copyText={"Effortlessly create beautiful docs with just markdown."}
          />
          <HomepageProducts
            title={"KYC"}
            copyText={"Effortlessly create beautiful docs with just markdown."}
          />
          <HomepageProducts
            title={"Cards"}
            copyText={"Effortlessly create beautiful docs with just markdown."}
          />
          <HomepageProducts
            title={"Payouts"}
            copyText={"Effortlessly create beautiful docs with just markdown."}
          />
        </section>

        {/* <main><HomepageFeatures /></main> */}
      </div>
    </Layout>
  );
}
