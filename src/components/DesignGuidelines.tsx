import React from 'react';

interface DesignGuidelinesProps {
  currentPage: number;
}

const DesignGuidelines = ({ currentPage }: DesignGuidelinesProps) => {
  const getPageGuidelines = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h4 className="font-semibold mb-2">Opening Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Fund name + tagline placement</li>
              <li>Three overlapping circles: Web3, AI, Creative</li>
              <li>Mission statement positioning</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="font-semibold mb-2">Why Now Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>"$2.25tn" headline figure emphasis</li>
              <li>4 market dynamics points layout</li>
              <li>Tech transformation visual placement</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="font-semibold mb-2">Unfair Advantage Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Network map showing partnerships</li>
              <li>Global presence points visualization</li>
              <li>Value flow illustration placement</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="font-semibold mb-2">Investment Strategy Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Check size range display</li>
              <li>Portfolio allocation table layout</li>
              <li>Pipeline status board design</li>
            </ul>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="font-semibold mb-2">Team Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Team grid (3 core + advisors) layout</li>
              <li>Key dates timeline placement</li>
              <li>Partner logos arrangement</li>
            </ul>
          </>
        );
      case 6:
        return (
          <>
            <h4 className="font-semibold mb-2">Fund Structure Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Terms summary table layout</li>
              <li>Key dates timeline placement</li>
              <li>Partner logos grid arrangement</li>
            </ul>
          </>
        );
      default:
        return (
          <>
            <h4 className="font-semibold mb-2">General Design Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Monochromatic color scheme for optimal readability</li>
              <li>Clear typography hierarchy with sans-serif fonts</li>
              <li>Consistent spacing and alignment</li>
              <li>Landscape orientation optimized</li>
            </ul>
          </>
        );
    }
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-mono-100 p-4 rounded text-xs text-mono-600 border border-mono-200">
      {getPageGuidelines()}
    </div>
  );
};

export default DesignGuidelines;