// let candyBar1 = {
//   mixed: true,
//   baked: true
// }



const buyChocolate = () => {
  newCandyObject = {
    type: "Milk Chocolate"
  }

  return newCandyObject
}

const addFlavoring = (newCandyObject) => {
  newCandyObject.flavor = "Mint"

  return newCandyObject
}

const makeBarkMixture = (newCandyObject) => {
   if (newCandyObject.flavor === "Mint") {
     newCandyObject.mixed = true
   } else { newCandyObject.mixed = false}
   
   return newCandyObject
}

const bakeCandy = (newCandyObject) => {
  if (newCandyObject.mixed === true) {
      newCandyObject.baked = true;  
  } else {
    newCandyObject.baked = false; 
  }
  return newCandyObject
}

const breakBark = (newCandyObject) => {
  if (newCandyObject.baked === true) {

    return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
    "Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece"]
  }
}

const makeCandy = () => {
  const candyBar = buyChocolate();
  addFlavoring(candyBar)
  addFlavoring(candyBar)
  makeBarkMixture(candyBar)
  bakeCandy(candyBar)
  let brokenBar = breakBark(candyBar)

  return brokenBar
}

console.log(makeCandy())