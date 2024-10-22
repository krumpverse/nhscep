// This is a simplified version of the QRISK3 algorithm
export const calculateQRisk = (data: any): number => {
  let baseRisk = 0;
  
  // Age factor (increases risk with age)
  baseRisk += (parseInt(data.age) - 25) * 0.3;
  
  // Gender factor
  if (data.gender === 'male') {
    baseRisk += 2;
  }
  
  // Blood pressure factor
  const systolicBP = parseInt(data.systolicBP);
  if (systolicBP > 140) {
    baseRisk += (systolicBP - 140) * 0.1;
  }
  
  // Smoking status
  switch (data.smoking) {
    case 'ex':
      baseRisk += 2;
      break;
    case 'light':
      baseRisk += 3;
      break;
    case 'moderate':
      baseRisk += 4;
      break;
    case 'heavy':
      baseRisk += 5;
      break;
  }
  
  // Cholesterol ratio
  const cholesterolRatio = parseFloat(data.cholesterol) / parseFloat(data.hdl);
  if (cholesterolRatio > 4) {
    baseRisk += (cholesterolRatio - 4) * 1.5;
  }
  
  // Medical conditions
  if (data.diabetes === 'yes') baseRisk += 4;
  if (data.familyHistory === 'yes') baseRisk += 3;
  if (data.atrialFibrillation === 'yes') baseRisk += 3;
  if (data.kidneyDisease === 'yes') baseRisk += 3;
  if (data.migraines === 'yes') baseRisk += 1;
  if (data.rheumatoidArthritis === 'yes') baseRisk += 2;
  
  // Normalize and cap the risk score
  let riskScore = Math.min(Math.max(baseRisk, 0), 99);
  
  return Number(riskScore.toFixed(1));
};