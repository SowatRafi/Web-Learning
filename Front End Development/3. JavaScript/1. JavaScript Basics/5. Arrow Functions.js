var developersList = (developers) => console.log(developers);

console.log(["Rafi", "Afif", "Rafid"]);

New1 = developersList.developers = "Rafi";
New2 = developersList.developers = "Afif";
New3 = developersList.developers = "Rafid";

console.log(New1);
console.log(New2);
console.log(New3);
