import React from 'react';

const FundStructurePage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Fund Structure</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Terms</h3>
        <table className="w-full text-brand-dark">
          <tbody>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Size</td>
              <td className="py-2">$10M</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Period</td>
              <td className="py-2">2024-2029</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Management</td>
              <td className="py-2">2%</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Carry</td>
              <td className="py-2">20%</td>
            </tr>
            <tr>
              <td className="py-2">Minimum</td>
              <td className="py-2">$50K</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Timeline</h3>
        <table className="w-full text-brand-dark">
          <tbody>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Q2 2024</td>
              <td className="py-2">First Close</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Q3 2024</td>
              <td className="py-2">Initial Deployment</td>
            </tr>
            <tr>
              <td className="py-2">Q4 2024</td>
              <td className="py-2">Second Close</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default FundStructurePage;