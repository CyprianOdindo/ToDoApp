export const calculateDays = (targetAmount, incomePerDay, incomePerMonth, isDaily) => {
    let daysNeeded;
    
    if (isDaily) {
      // Kipato cha kila siku
      daysNeeded = targetAmount / incomePerDay;
    } else {
      // Kipato cha kila mwezi, tunagawanya kipato cha mwezi kwa siku 30
      daysNeeded = targetAmount / (incomePerMonth / 30);
    }
  
    return Math.ceil(daysNeeded); // Piga makadirio ya juu ili kuhesabu siku kamili
  };
  