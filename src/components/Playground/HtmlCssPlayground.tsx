// src/components/Playground/HtmlCssPlayground.tsx
import React, {useMemo, useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell} from './PlaygroundShell';

type HtmlCssPlaygroundProps = {
  initialHtml: string;
  initialCss?: string;
  layout?: 'side-by-side' | 'stacked';
};

export default function HtmlCssPlayground({
  initialHtml,
  initialCss = '',
  layout = 'side-by-side',
}: HtmlCssPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);

  const srcDoc = useMemo(
    () => `<html><head><style>${css}</style></head><body>${html}</body></html>`,
    [html, css],
  );

  return (
    <PlaygroundShell
      layout={layout}
      codePanel={
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <CodeBlock code={html} onChange={setHtml} language="markup" />
          <CodeBlock code={css} onChange={setCss} language="css" />
        </div>
      }
      resultPanel={
        <iframe
          title="Resultado HTML+CSS"
          srcDoc={srcDoc}
          style={{width: '100%', height: '460px', border: '1px solid #ccc', backgroundColor: 'white', borderRadius: '8px'}}
        />
      }
    />
  );
}