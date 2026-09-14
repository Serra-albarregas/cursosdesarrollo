// src/components/HtmlPlayground/index.tsx
import React, {useState} from 'react';
import {CodeEditor} from './CodeEditor';

type HtmlPlaygroundProps = {
  initialHtml: string;
};

export default function HtmlPlayground({initialHtml}: HtmlPlaygroundProps): React.ReactNode {
  const [html, setHtml] = useState(initialHtml);
  const [bold, setBold] = useState(false);

  return (
    <div style={{margin: '2rem 0'}}>
      <button type="button" onClick={() => setBold((b) => !b)} style={{marginBottom: '0.5rem'}}>
        {bold ? 'Negrita: ON' : 'Negrita: OFF'}
      </button>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
        <div>
          <h3>HTML</h3>
          <CodeEditor code={html} onChange={setHtml} language="markup" bold={bold} />
        </div>

        <div>
          <h3>Resultado</h3>
          <iframe
            title="Resultado HTML"
            srcDoc={html}
            style={{width: '100%', height: '300px', border: '1px solid #ccc', backgroundColor: 'white'}}
          />
        </div>
      </div>
    </div>
  );
}