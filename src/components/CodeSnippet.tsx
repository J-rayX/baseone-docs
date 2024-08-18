import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ code }) => {
  return (
    <div className="flex flex-col bg-gray-00 border border-orange-950 rounded-lg max-w-xl w-[100%] max-lg:w-[100%] max-lg:mt-6 max-lg:mx-0">
      <SyntaxHighlighter
        language="bash"
        customStyle={{
          maxWidth: "100%",
          lineHeight: "0.8em",
          padding: "0.3em",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
