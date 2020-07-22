import express, { json } from "express";

const app = express();
app.use(json());

const enum House {
    Gryffindor = "Gryffindor",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw",
    Slytherin = "Slytherin"
  }
  
  type Wizard = {
    name: string;
    house: House;
    points: number;
  };

  const HarryPotter: Wizard = {
    name: "Harry Potter",
    house: House.Gryffindor,
    points: 40
  };
  
  const HermioneGranger: Wizard = {
    name: "Hermione Granger",
    house: House.Gryffindor,
    points: 140
  };
  
  const DracoMalfoy: Wizard = {
    name: "Draco Malfoy",
    house: House.Slytherin,
    points: -20
  };
  
  const TaylorSwift: Wizard = {
    name: "Taylor Swift",
    house: House.Slytherin,
    points: 100
  };
  
  const LinManuelMiranda: Wizard = {
    name: "Lin Manuel Miranda",
    house: House.Slytherin,
    points: 5000
  };
  
  const CedricDiggory: Wizard = {
    name: "Cedric Diggory",
    house: House.Hufflepuff,
    points: 12
  };
  
  const SallyPerks: Wizard = {
    name: "Sally Perks",
    house: House.Hufflepuff,
    points: 15
  };
  
  const LunaLovegood: Wizard = {
    name: "Luna Lovegood",
    house: House.Ravenclaw,
    points: 100
  };
  
  const ChoChang: Wizard = {
    name: "Cho Chang",
    house: House.Ravenclaw,
    points: 100
  };
  
  const wizards: Wizard[] = [
    HarryPotter,
    HermioneGranger,
    DracoMalfoy,
    LinManuelMiranda,
    TaylorSwift,
    CedricDiggory,
    SallyPerks,
    LunaLovegood,
    ChoChang
  ];
  
  function wizardToString({ name, house, points }: Wizard) {
    return `${name}, ${house}, ${points}`;
  }

  function isWinner({ points }: Wizard) {
    return points > 0;
  }
  function isLoser(wizard: Wizard) {
    return !isWinner(wizard);
  }


app.get("/", (request, response) => {
  //const wizardNames = wizards.map(wizard => wizard.name);  //map
  
  //const wizardStrings = wizards.map(wizardToString);  // lambda (aka an anonymous function)

  //const slytherins = wizards.filter(wizard => wizard.house === House.Slytherin);  //filter
  //const winners = slytherins.filter(isWinner); 
  //const losers = slytherins.filter(isLoser);

  //const totalPoints = wizards.reduce(                   //reduce sum total ES6
  //  (accumulator, { points }) => accumulator + points,
  //  0
  //);

  const pointsPerHouse = wizards.reduce((acc, { house, points }) => acc + points, 0);  

  return response.json(pointsPerHouse);
});

app.listen(3000, () => {
  console.log("🚀 Server started on http://localhost:3000");
});