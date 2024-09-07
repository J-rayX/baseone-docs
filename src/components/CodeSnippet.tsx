import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { useColorMode } from "@docusaurus/theme-common";

const CodeSnippet = ({ code }) => {
  const { colorMode } = useColorMode(); // If using Docusaurus
  const isDarkMode = colorMode === "dark";
  return (
    <div className=" text-blue-900 flex flex-col bg-gray-600 border border-orange-950 rounded-lg max-lg:mt-6 drop-shadow-lg max-lg:mx- 0">
      <SyntaxHighlighter
        language="bash"
        customStyle={{
          maxWidth: "100%",
          lineHeight: "1.4em",
          padding: "0.9em",
          fontSize: "0.98em",
          backgroundColor: isDarkMode ? "#0A2540" : "#f6f8fa",
          color: isDarkMode ? "#c5dcf9" : "#24292e",

          // backgroundColor: "#264e75",
          // color: "#ffffff",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
