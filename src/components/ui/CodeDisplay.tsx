import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CodeDisplayProps = {
  children: string;
  language: string;
  showLineNumbers?: boolean;
};
const CodeDisplay: React.FC<CodeDisplayProps> = ({
  children,
  language,
  showLineNumbers = true,
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers={showLineNumbers}
      style={atomOneDark}
      wrapLines
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
