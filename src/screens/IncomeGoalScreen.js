import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { calculateDays } from '../services/calculationService';

const IncomeGoalScreen = () => {
  const [targetAmount, setTargetAmount] = useState('');
  const [income, setIncome] = useState('');
  const [isDaily, setIsDaily] = useState(true); // True ikiwa ni kipato cha kila siku
  const [daysNeeded, setDaysNeeded] = useState(null);

  const handleCalculate = () => {
    const target = parseFloat(targetAmount);
    const dailyIncome = parseFloat(income);

    if (!isNaN(target) && !isNaN(dailyIncome)) {
      const days = calculateDays(target, dailyIncome, dailyIncome, isDaily);
      setDaysNeeded(days);
    } else {
      alert("Tafadhali ingiza namba sahihi!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Weka Lengo la Kiasi cha Pesa Unachotaka (TSH):</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        placeholder="Kiasi cha lengo"
        value={targetAmount}
        onChangeText={setTargetAmount}
      />

      <Text>Weka Kipato Chako Kila {isDaily ? "Siku" : "Mwezi"} (TSH):</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        placeholder={`Kiasi kwa ${isDaily ? "Siku" : "Mwezi"}`}
        value={income}
        onChangeText={setIncome}
      />

      <Button
        title={`Badilisha hadi kipato cha kila ${isDaily ? "Mwezi" : "Siku"}`}
        onPress={() => setIsDaily(!isDaily)}
      />

      <Button title="Piga Hesabu" onPress={handleCalculate} />

      {daysNeeded !== null && (
        <Text style={{ marginTop: 20 }}>
          Utahitaji siku {daysNeeded} kufikia lengo lako.
        </Text>
      )}
    </View>
  );
};

// Funtion ya kufanya hesabu
const calculateDays = (targetAmount, incomePerDay, incomePerMonth, isDaily) => {
  let daysNeeded;
  
  if (isDaily) {
    daysNeeded = targetAmount / incomePerDay;
  } else {
    daysNeeded = targetAmount / (incomePerMonth / 30);
  }

  return Math.ceil(daysNeeded); // Makadirio ya juu
};

export default IncomeGoalScreen;
