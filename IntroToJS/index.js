
class Chef {
    constructor (name, age) {
        this.age = age;
        this.name = name;

    }
    makeChicken () {
        document.write ("This Chef MAkes Chicken <br>");
    }
    makeSalad () {
        document.write ("This Chef Makes Salad <br>");
    }
    makeSpecialDish () {
        document.write ("This Chef Makes Special Dish <br>");
    }
 }

 class italianChef extends Chef {
     constructor (name, age, countryOfOrigin) {
         super (name, age);
         this.countryOfOrigin = countryOfOrigin;

     }
     makePasta () {
         document.write ("This Chef MAkes Pasta <br>");
     }

     //Overidden//

     makeSpecialDish () {
         document.write ("This Chef Makes PArm <br> ");
     }
 }

 var myChef = new Chef ("James Gordon", 50);
 myChef.makeChicken();

var myItalianChef = new italianChef ("Hell's Kitchen", 60);
myItalianChef.makeSpecialDish();
