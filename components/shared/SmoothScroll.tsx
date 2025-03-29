'use client';

import ReactLenis from 'lenis/react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis options={{ lerp: 0.18 }} root>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
