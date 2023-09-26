// code your solution here
function saturdayFun(param = "roller-skate") {
    return `This Saturday, I want to ${param}!`;
  }
  
  saturdayFun(); 
  saturdayFun("bathe my dog!"); 

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  mondayWork();
  mondayWork("work from home.")


  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated developer"))  
