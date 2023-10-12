// Return the individual's age when given their birthday MM/DD/YYYY



const Bill = "10/12/1999"


const ageCalc = (date) => {
    const birthMonth = parseInt(date.split("/")[0]);
    const birthDay = parseInt(date.split("/")[1]);
    const birthYear = parseInt(date.split("/")[2]);
    const today = new Date(Date.now());
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();
    if (todayMonth < birthMonth || (todayMonth == birthMonth && todayDay < birthDay)) {
        age = (todayYear - birthYear) - 1
    }
    else {
        age = todayYear - birthYear
    }
    return age
}

console.log(ageCalc(Bill))