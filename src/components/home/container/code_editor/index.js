import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./style.css";

export const CodeEditor = () => {
  const code = `const a = 10;`;

  // Function to handle code changes in the editor

  return (
    <div className="container">
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
