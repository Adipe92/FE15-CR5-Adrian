"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, img) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.img = img;
    }
    displayCards() {
        return `
       
        <div class="card m-4" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="animal">
                    <div class="bg-warning">
                        <h5 class="text-center p-2">${this.name}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Gender: ${this.gender}</p>
                        <p class="age card-text">Age: ${this.age}</p>
                        <p class="card-text">Size: ${this.size}</p>
                        <div class="text-center">
                        <div id="bg-color" class="bg-success mb-3" style="height: 40px; border-radius: 5px 5px 5px;"><p class="p-2 fw-bold text-white">Vaccinated ${this.vaccine}</p></div>
                        </div>
                    </div>
                </div>
    
        `;
    }
}
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, img, breed, fur, urlBreed) {
        super(name, age, gender, size, vaccine, img);
        this.breed = breed;
        this.fur = fur;
        this.urlBreed = urlBreed;
    }
    displayCards() {
        return `
       
        <div class="card m-4" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="animal">
                    <div class="bg-warning">
                        <h5 class="text-center p-2">${this.name}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Gender: ${this.gender}</p>
                        <p class="age card-text">Age: ${this.age}</p>
                        <p class="card-text">Size: ${this.size}</p>
                        <div class="text-center">
                            <div id="bg-color" class="bg-success mb-3" style="height: 40px; border-radius: 5px 5px 5px;"><p class="p-2 fw-bold text-white">Vaccinated ${this.vaccine}</p></div>
                        </div>
                        <p class="card-text">Breed: ${this.breed}</p>
                        <p class="card-text">Color: ${this.fur}</p>
                        <p class="card-text">Website: ${this.urlBreed}</p>
                    </div>
                </div>
    
        `;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, img, breedDog, training) {
        super(name, age, gender, size, vaccine, img);
        this.breedDog = breedDog;
        this.training = training;
    }
    displayCards() {
        return `
       
        <div class="card m-4" style="width: 18rem;">
                    <img src="${this.img}" class="card-img-top" alt="animal">
                    <div class="bg-warning">
                        <h5 class="text-center p-2">${this.name}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Gender: ${this.gender}</p>
                        <p class="age card-text">Age: ${this.age}</p>
                        <p class="card-text">Size: ${this.size}</p>
                        <div class="text-center">
                        <div id="bg-color" class="bg-success mb-3" style="height: 40px; border-radius: 5px 5px 5px;"><p class="p-2 fw-bold text-white">Vaccinated ${this.vaccine}</p></div>
                        </div>
                        <p class="card-text">Breed: ${this.breedDog}</p>
                        <p class="card-text">Training: ${this.training}</p>
                    </div>
                </div>
    
        `;
    }
}
let animal1 = new Animal("Raty", 2, "female", "small", false, "img/rat.jpg");
let animal2 = new Animal("Amanda", 4, "female", "small", false, "img/pig1.jpg");
let animal3 = new Animal("Piglet", 1, "male", "small", true, "img/pig2.jpg");
let animal4 = new Animal("Fluffy", 10, "male", "small", false, "img/z1.jpg");
let cat1 = new Cat("Sisi", 4, "female", "small", true, "img/cat1.jpg", "American Wire Hair", "Brown", "www.purina.com");
let cat2 = new Cat("Barry", 2, "male", "small", true, "img/cat2.jpg", "Birman", "White", "www.purina.com");
let dog1 = new Dog("Arthur", 6, "male", "big", true, "img/dog1.jpg", "Dog Breed 1", "Yes");
let dog2 = new Dog("Gooffy", 4, "male", "small", true, "img/dog2.jpg", "Dog Breed 2", "No");
let dog3 = new Dog("Burney", 7, "male", "medium", false, "img/dog3.jpg", "Dog Breed 3", "No");
let animals = [animal1, animal2, animal3, cat1, cat2, dog1, dog2, dog3, animal4];
for (let i = 0; i < animals.length; i++) {
    let result = animals[i];
    console.table(result);
}
animals.forEach((val) => {
    document.getElementById("cards").innerHTML += val.displayCards();
});
const priority = (document.getElementById("sort"));
const ages = (document.getElementsByClassName("age"));
priority === null || priority === void 0 ? void 0 : priority.addEventListener('click', function () {
    animals.sort((a, b) => b.age - a.age);
    console.table(animals);
});
const color = (document.getElementById("bg-color"));
