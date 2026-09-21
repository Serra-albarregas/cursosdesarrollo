import React from 'react';

export type Layout = 'side-by-side' | 'stacked';

type PlaygroundShellProps = {
  layout: Layout;
  codePanel: React.ReactNode;
  resultPanel: React.ReactNode;
};

export function PlaygroundShell({
  layout,
  codePanel,
  resultPanel,
}: PlaygroundShellProps) {
  const isStacked = layout === 'stacked';

  return (
    <div style={{margin: '2rem 0'}}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isStacked ? '1fr' : '1fr 1fr',
          gap: '1.5rem',
        }}
      >
        <div>{codePanel}</div>
        <div>{resultPanel}</div>
      </div>
    </div>
  );
}
