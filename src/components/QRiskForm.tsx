import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface QRiskFormProps {
  onCalculate: (data: any) => void;
}

const QRiskForm: React.FC<QRiskFormProps> = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    systolicBP: '',
    smoking: 'never',
    cholesterol: '',
    hdl: '',
    height: '',
    weight: '',
    ethnicity: 'white',
    diabetes: 'no',
    familyHistory: 'no',
    atrialFibrillation: 'no',
    kidneyDisease: 'no',
    migraines: 'no',
    rheumatoidArthritis: 'no',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            required
            min="25"
            max="84"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Systolic Blood Pressure (mmHg)
          </label>
          <input
            type="number"
            name="systolicBP"
            required
            min="70"
            max="210"
            value={formData.systolicBP}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Smoking Status</label>
          <select
            name="smoking"
            required
            value={formData.smoking}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="never">Never</option>
            <option value="ex">Ex-smoker</option>
            <option value="light">Light smoker</option>
            <option value="moderate">Moderate smoker</option>
            <option value="heavy">Heavy smoker</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Cholesterol (mmol/L)
          </label>
          <input
            type="number"
            name="cholesterol"
            step="0.1"
            required
            value={formData.cholesterol}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            HDL Cholesterol (mmol/L)
          </label>
          <input
            type="number"
            name="hdl"
            step="0.1"
            required
            value={formData.hdl}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Medical History</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Type 1 or 2 Diabetes', name: 'diabetes' },
              { label: 'Family History of Heart Disease', name: 'familyHistory' },
              { label: 'Atrial Fibrillation', name: 'atrialFibrillation' },
              { label: 'Kidney Disease', name: 'kidneyDisease' },
              { label: 'Migraines', name: 'migraines' },
              { label: 'Rheumatoid Arthritis', name: 'rheumatoidArthritis' },
            ].map((condition) => (
              <div key={condition.name} className="flex items-center">
                <input
                  type="checkbox"
                  name={condition.name}
                  checked={formData[condition.name as keyof typeof formData] === 'yes'}
                  onChange={(e) => handleChange({
                    target: {
                      name: condition.name,
                      value: e.target.checked ? 'yes' : 'no'
                    }
                  } as any)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  {condition.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Calculate Risk
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default QRiskForm;