import React from 'react';
import { CodeBlock, shadesOfPurple } from 'react-code-blocks';

export const Code = ({ children }: { children: string }) => (
  <CodeBlock
    text={children}
    language="jsx"
    showLineNumbers={true}
    theme={shadesOfPurple}
  />
);
