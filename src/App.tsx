import React, { useState } from 'react';
import { Calculator, Heart, AlertCircle, Info } from 'lucide-react';
import QRiskForm from './components/QRiskForm';
import QRiskResult from './components/QRiskResult';
import { calculateQRisk } from './utils/qriskCalculator';

function App() {
  const [riskScore, setRiskScore] = useState<number | null>(null);
  
  const handleCalculate = (formData: any) => {
    const score = calculateQRisk(formData);
    setRiskScore(score);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">QRISK®3 Calculator</h1>
          </div>
          <a
            href="https://qrisk.org/three"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <Info className="h-4 w-4" />
            About QRISK®3
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Cardiovascular Risk Assessment
                </h2>
              </div>
              <p className="text-gray-600">
                Calculate your 10-year risk of heart disease and stroke using the latest QRISK®3 algorithm.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Important Notice
                  </h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    This calculator is for informational purposes only and should not replace professional medical advice. Always consult with your healthcare provider.
                  </p>
                </div>
              </div>
            </div>

            {riskScore === null ? (
              <QRiskForm onCalculate={handleCalculate} />
            ) : (
              <QRiskResult 
                score={riskScore} 
                onRecalculate={() => setRiskScore(null)} 
              />
            )}
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          QRISK®3 is a registered trademark of the University of Nottingham and EMIS.
        </p>
      </footer>
    </div>
  );
}

export default App;