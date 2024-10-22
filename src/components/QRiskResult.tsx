import React from 'react';
import { RefreshCcw, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface QRiskResultProps {
  score: number;
  onRecalculate: () => void;
}

const QRiskResult: React.FC<QRiskResultProps> = ({ score, onRecalculate }) => {
  const getRiskLevel = (score: number) => {
    if (score < 10) return { level: 'Low', color: 'green', icon: CheckCircle };
    if (score < 20) return { level: 'Moderate', color: 'yellow', icon: AlertTriangle };
    return { level: 'High', color: 'red', icon: XCircle };
  };

  const { level, color, icon: Icon } = getRiskLevel(score);

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className={`inline-flex items-center justify-center h-24 w-24 rounded-full bg-${color}-100`}>
          <Icon className={`h-12 w-12 text-${color}-600`} />
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">{score.toFixed(1)}%</h2>
        <p className={`mt-1 text-lg font-medium text-${color}-600`}>
          {level} Risk
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          Your 10-year risk of developing cardiovascular disease (heart disease or stroke) is {score.toFixed(1)}%. 
          This means that out of 100 people with similar risk factors, approximately {Math.round(score)} would be 
          expected to develop cardiovascular disease within the next 10 years.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium text-gray-900 mb-2">What does this mean?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Low risk (&lt;10%): Continue maintaining a healthy lifestyle</li>
            <li>• Moderate risk (10-20%): Consider lifestyle changes and discuss with your doctor</li>
            <li>• High risk (&gt;20%): Important to discuss with your healthcare provider</li>
          </ul>
        </div>

        <button
          onClick={onRecalculate}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          Calculate Again
        </button>
      </div>
    </div>
  );
};

export default QRiskResult;