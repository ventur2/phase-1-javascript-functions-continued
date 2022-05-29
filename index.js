function saturdayFun(activity = "roller-skate"){
return (`This Saturday, I want to ${activity}!`);
}
// saturdayFun();
// saturdayFun("bathe my dog")

   
function mondayWork (work = "go to the office") {
return (`This Monday, I will ${work}.`);
}
// mondayWork ();
// mondayWork ("work from home.");

function wrapAdjective (flair = "*"){
return function (adjective = "special"){
return `You are ${flair}${adjective}${flair}!`
}
}