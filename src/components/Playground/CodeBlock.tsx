// src/components/Playground/CodeBlock.tsx
import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';

type Language = 'markup' | 'css' | 'javascript';

const LABELS: Record<Language, string> = {
  markup: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
};

type CodeBlockProps = {
  code: string;
  onChange: (code: string) => void;
  language: Language;
};

export function CodeBlock({code, onChange, language}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #1e1e1e',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#1e1e1e',
          padding: '0.4rem 0.6rem',
          borderBottom: '1px solid #333',
        }}
      >
        <button
          type="button"
          onClick={handleCopy}
          title="Copiar código"
          aria-label="Copiar código"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'transparent',
            border: 'none',
            color: copied ? '#4ec9b0' : '#ccc',
            cursor: 'pointer',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            fontSize: '12px',
          }}
        >
          {copied ? (
            <CheckIcon />
          ) : (
            <CopyIcon />
          )}
          {copied ? 'Copiado' : ''}
        </button>

        <span style={{marginLeft: 'auto', color: '#888', fontSize: '12px', fontFamily: 'monospace'}}>
          {LABELS[language]}
        </span>
      </div>

      <Editor
        value={code}
        onValueChange={onChange}
        highlight={(text) => highlight(text, languages[language], language)}
        padding={16}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", Consolas, monospace',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 1.6,
          minHeight: 220,
          backgroundColor: '#1e1e1e',
          color: '#f8f8f2',
        }}
      />
    </div>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}