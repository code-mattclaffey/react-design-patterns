import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

export const Code = ({ children }) => (
  <CodeBlock
    text={children}
    language="jsx"
    showLineNumbers={true}
    theme={dracula}
  />
);
