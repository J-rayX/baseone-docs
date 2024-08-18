import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeSnippet = ({ code }) => {
  return (
    <div className="flex flex-col bg-gray-00 border border-orange-950 rounded-lg max-w-xl w-[100%] max-lg:w-[100%] max-lg:mt-6  drop-shadow-lg max-lg:mx-0">
      <SyntaxHighlighter
        language="bash"
        customStyle={{
          maxWidth: "100%",
          lineHeight: "0.9em",
          padding: "0.3em",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
