import React, {useMemo, useState} from 'react';
import {CodeBlock} from './CodeBlock';
import {PlaygroundShell, type Layout} from './PlaygroundShell';
import {ResultFrame} from './ResultFrame';

type HtmlCssJsPlaygroundProps = {
  initialHtml: string;
  initialCss?: string;
  initialJs?: string;
  layout?: Layout;
  height?: number | string;
};

export default function HtmlCssJsPlayground({
  initialHtml,
  initialCss = '',
  initialJs = '',
  layout = 'side-by-side',
  height = 700,
}: HtmlCssJsPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);

  const doc = useMemo(() => {
    // El JS del alumno se parte para no cerrar antes de tiempo ningún <script>
    // del documento generado, igual que hacemos con el bootstrap.
    const safeJs = js.replace(/<\/script>/gi, '<\\/script>');
    return (
      `<!doctype html><html lang="es"><head><meta charset="utf-8">` +
      `<style>${css}</style></head><body>${html}` +
      `<script>${safeJs}</script></body></html>`
    );
  }, [html, css, js]);

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
        <ResultFrame doc={doc} title="Resultado HTML+CSS+JS" height={height} />
      }
    />
  );
}
