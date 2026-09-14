// src/components/Playground/HtmlPlayground.tsx
import React, {useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell} from './PlaygroundShell';

type HtmlPlaygroundProps = {
  initialHtml: string;
  layout?: 'side-by-side' | 'stacked';
};

export default function HtmlPlayground({
  initialHtml,
  layout = 'side-by-side',
}: HtmlPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);

  return (
    <PlaygroundShell
      layout={layout}
      codePanel={<CodeBlock code={html} onChange={setHtml} language="markup" />}
      resultPanel={
        <iframe
          title="Resultado HTML"
          srcDoc={html}
          style={{width: '100%', height: '300px', border: '1px solid #ccc', backgroundColor: 'white', borderRadius: '8px'}}
        />
      }
    />
  );
}