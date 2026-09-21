import React, {useMemo, useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell, type Layout} from './PlaygroundShell';
import {ResultFrame} from './ResultFrame';

type HtmlCssPlaygroundProps = {
  initialHtml: string;
  initialCss?: string;
  layout?: Layout;
  height?: number | string;
};

export default function HtmlCssPlayground({
  initialHtml,
  initialCss = '',
  layout = 'side-by-side',
  height = 460,
}: HtmlCssPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);

  const doc = useMemo(
    () =>
      `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${css}</style></head><body>${html}</body></html>`,
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
        <ResultFrame doc={doc} title="Resultado HTML+CSS" height={height} />
      }
    />
  );
}
