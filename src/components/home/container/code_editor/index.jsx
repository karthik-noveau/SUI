import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import styles from "./codeEditor.module.css";

export const CodeEditor = ({ code, language }) => {
  return (
    <div className={styles.container} contentEditable="true">
      <SyntaxHighlighter language={language} style={okaidia}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
