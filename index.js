const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';
console.log(burgers)
console.log(featuredDrink)
function addBurger() {
  
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
  
  if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
  }
}
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}
addBurger();
changeFeaturedDrink ();
console.log(burgers)
console.log(featuredDrink)