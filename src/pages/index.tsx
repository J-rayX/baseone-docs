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
import {
  SITE_TITLE,
  API_REFERENCE_EMOJI,
  GUIDES_EMOJI,
  PRODUCT_INFO,
} from "../constants";

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
      title={SITE_TITLE}
      description="Description will go into a meta tag in <head />"
    >
      <div className=" font-sans flex flex-col bg">
        <Section
          id="hero"
          className="relative flex max-lg:flex-col gap-1 items-center px-40 max-lg:px-0 py-12 bg-[#E9EFFF] dark:text-white overflow-hidden"
          bg="transparent"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
            }}
          />
          <div className="w-[50%] max-lg:w-full flex flex-col items-start max-lg:items-center max-lg:text-center md:w-[90%] sm:w-[90%] mx-auto relative z-1 mb-[4rem] max-lg:mb-[1rem] max-lg:p-2 md:mb-0 lg:mb-[rem] leading-7">
            <a href="" className="group mb-4">
              <div className="flex gap-2 justify-center items-center px-2 py-1 border border-[#175fff] rounded-full object-contain text-sm max-sm:text-xs group-hover:bg-[#175fff] transition-colors duration-200">
                <span>
                  <img src="" width="" alt="" />
                </span>
                <span className="text-[#175fff] group-hover:text-white">
                  Reconciliation is coming! 🎉
                </span>
              </div>
            </a>

            <h1 className="flex flex-col mb-6 text-5xl font-bold font-sans max-sm:text-4xl max-md:text-4xl text-[#0A2540] max-lg:text-4xl">
              BaseOne Docs:{" "}
              <span className="text-[#175fff] text-4xl max-lg:text-3xl">
                Your all-in-one fintech shop
              </span>
            </h1>

            <p className="pb-6 max-lg:pb-3 text-xl font-semibold text-[#0A2540]">
              Idea to Launch in Minutes
            </p>

            <div className="flex gap-4 text-lg font-bold">
              <a
                href="/docs/intro"
                className="rounded-xl py-3 px-6 normal-case border-2 border-[#175fff] text-[#175fff] font-semibold 
                 hover:bg-[#175fff] hover:text-white transition-all duration-300 ease-in-out
                 shadow-md hover:shadow-lg 
                 flex items-center space-x-2
                 transform hover:-translate-y-0.5
                 max-lg:px-4 max-lg:py-2 max-lg:text-sm"
              >
                <span>Guides</span>
                <span role="img" aria-label="books">
                  📚
                </span>
              </a>
              <a
                href="/api"
                className="rounded-xl py-3 px-6 normal-case border-2 border-[#175fff] text-[#175fff] font-semibold 
                 hover:bg-[#175fff] hover:text-white transition-all duration-300 ease-in-out
                 shadow-md hover:shadow-lg 
                 flex items-center space-x-2
                 transform hover:-translate-y-0.5
                 max-lg:px-4 max-lg:py-2 max-lg:text-sm"
              >
                <span>API Reference</span>
                <span role="img" aria-label="code">
                  {API_REFERENCE_EMOJI}
                </span>
              </a>
            </div>
          </div>
          <div className="max-md:w-[100%] max:md:px-6 max-md:text-md max-sm:px-6 max-sm:text-xs dark:text-[#0A2540] relative z-1">
            <CodeSnippet code={code} />
          </div>
        </Section>

        <section className="flex max-md:flex-col py-8 justify-center gap-4 px-28 max-lg:px-2 text-white">
          {Object.values(PRODUCT_INFO).map(
            ({ title, copyText, productIcon, href }) => (
              <HomepageProducts
                key={title}
                title={title}
                copyText={copyText}
                productIcon={productIcon}
                href={href}
              />
            )
          )}
        </section>

        {/* <main><HomepageFeatures /></main> */}
      </div>
    </Layout>
  );
}
