import React from 'react';

const DesignGuidelines = () => {
  return (
    <div className="absolute bottom-4 left-4 right-4 bg-mono-100 p-4 rounded text-xs text-mono-600 border border-mono-200">
      <h4 className="font-semibold mb-2">Design Guidelines</h4>
      <ul className="list-disc pl-4 space-y-1">
        <li>Monochromatic color scheme for optimal readability</li>
        <li>Clear typography hierarchy with sans-serif fonts</li>
        <li>Consistent spacing and alignment</li>
        <li>Landscape orientation optimized</li>
      </ul>
    </div>
  );
};

export default DesignGuidelines;