import React, {useMemo, useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell, type Layout} from './PlaygroundShell';
import {ResultFrame} from './ResultFrame';

type HtmlPlaygroundProps = {
  initialHtml: string;
  layout?: Layout;
  height?: number | string;
};

export default function HtmlPlayground({
  initialHtml,
  layout = 'side-by-side',
  height = 300,
}: HtmlPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);

  const doc = useMemo(
    () =>
      `<!doctype html><html lang="es"><head><meta charset="utf-8"></head><body>${html}</body></html>`,
    [html],
  );

  return (
    <PlaygroundShell
      layout={layout}
      codePanel={<CodeBlock code={html} onChange={setHtml} language="markup" />}
      resultPanel={
        <ResultFrame doc={doc} title="Resultado HTML" height={height} />
      }
    />
  );
}
