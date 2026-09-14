// src/components/Playground/HtmlCssJsPlayground.tsx
import React, {useMemo, useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell} from './PlaygroundShell';

type HtmlCssJsPlaygroundProps = {
  initialHtml: string;
  initialCss?: string;
  initialJs?: string;
  layout?: 'side-by-side' | 'stacked';
};

export default function HtmlCssJsPlayground({
  initialHtml,
  initialCss = '',
  initialJs = '',
  layout = 'side-by-side',
}: HtmlCssJsPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);

  const srcDoc = useMemo(
    () => `<html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`,
    [html, css, js],
  );

  return (
    <PlaygroundShell
      layout={layout}
      codePanel={
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <CodeBlock code={html} onChange={setHtml} language="markup" />
          <CodeBlock code={css} onChange={setCss} language="css" />
          <CodeBlock code={js} onChange={setJs} language="javascript" />
        </div>
      }
      resultPanel={
        <iframe
          title="Resultado HTML+CSS+JS"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          style={{width: '100%', height: '700px', border: '1px solid #ccc', backgroundColor: 'white', borderRadius: '8px'}}
        />
      }
    />
  );
}