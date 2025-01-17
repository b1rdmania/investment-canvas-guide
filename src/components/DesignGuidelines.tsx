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
              <li>Large logo placement</li>
              <li>Clean white background</li>
              <li>Centered composition</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="font-semibold mb-2">Executive Summary Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Secondary logo placement</li>
              <li>Vision statement positioning</li>
              <li>Mission statement layout</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="font-semibold mb-2">Why Now Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>"$2.25tn" headline figure emphasis</li>
              <li>4 market dynamics points layout</li>
              <li>Breaking point visualization</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="font-semibold mb-2">Deal Capture Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Global presence points</li>
              <li>Network visualization</li>
              <li>Strategic positioning elements</li>
            </ul>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="font-semibold mb-2">Technical Access Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Partnership network display</li>
              <li>Technical relationships layout</li>
              <li>Value flow visualization</li>
            </ul>
          </>
        );
      case 6:
        return (
          <>
            <h4 className="font-semibold mb-2">Investment Focus Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Check size range display</li>
              <li>Target returns layout</li>
              <li>Key metrics visualization</li>
            </ul>
          </>
        );
      case 7:
        return (
          <>
            <h4 className="font-semibold mb-2">Team Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Team grid layout (3 core)</li>
              <li>Experience highlights</li>
              <li>Expertise visualization</li>
            </ul>
          </>
        );
      case 8:
        return (
          <>
            <h4 className="font-semibold mb-2">Fund Structure Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Terms summary table layout</li>
              <li>Timeline visualization</li>
              <li>Key dates arrangement</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-mono-100 p-4 rounded text-xs text-mono-600 border border-mono-200">
      {getPageGuidelines()}
    </div>
  );
};

export default DesignGuidelines;