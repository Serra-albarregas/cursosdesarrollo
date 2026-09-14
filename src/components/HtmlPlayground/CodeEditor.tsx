// src/components/HtmlPlayground/CodeEditor.tsx
import React from 'react';
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

type Language = 'markup' | 'css' | 'javascript';

type CodeEditorProps = {
  code: string;
  onChange: (code: string) => void;
  language: Language;
  bold: boolean;
};

export function CodeEditor({code, onChange, language, bold}: CodeEditorProps) {
  return (
    <Editor
      value={code}
      onValueChange={onChange}
      highlight={(text) => highlight(text, languages[language], language)}
      padding={16}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 14,
        fontWeight: bold ? 700 : 400,
        minHeight: 300,
        border: '1px solid #ccc',
        backgroundColor: '#2d2d2d',
      }}
    />
  );
}