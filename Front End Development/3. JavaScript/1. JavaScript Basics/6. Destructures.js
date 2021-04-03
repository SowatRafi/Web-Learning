var vacation = {
    destination: "Chittagong",
    travelers: 2,
    activity: "biking",
    cost: 14000
};

function vacationSummer ( {destination, activity} ){
    return `Let's go to ${destination} for ${activity}.`;
}

console.log(vacationSummer(vacation));