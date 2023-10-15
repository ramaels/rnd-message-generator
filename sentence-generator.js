// declaration of 3 arrays; food, cars and life-inspiration
const food = ['a culinary symphony', 'a warm embrace', 'a taste of heaven', 'a journey around the world', 'a burst of happiness', 'a culinary masterpiece', 'a symphony of flavors', 'a comforting hug', 'a dance of taste buds', 'a moment of pure bliss'],
    cars = ['like a racing champion', 'on top of the world', 'invincible', 'like a modern-day knight', 'utterly alive', 'like a jet pilot', 'unstoppable', 'like a thrill-seeker', 'like a superhero', 'completely free'],
    lifeInpiration = ['hope', 'determination', 'courage', 'faith', 'resilience', 'ambition', 'love', 'perseverance', 'positivity', 'faith in ourselves'];
// declaration of a nested arrays containing the 3 arrays; food, cars and life-inspiration
const data = [food, cars, lifeInpiration];
// function to generate a random index to be used to select an item from the arrays food, cars and life-inspiration
const randomIndex = num => Math.floor(Math.random() * num);

console.log(randomIndex(10));

// function to generate the 3 messages
const generateMessages = arr => {
    let res = []; // aray to store the messages and to be returned by the function
    for (const subarr of arr) { //loop through the data array so the subArray can be accessed.
        const i = randomIndex(subarr.length);
        if (arr.indexOf(subarr) === 0) {
            res.push(`Savoring a delicious meal is like ${subarr[i]}, bringing joy to both the palate and the soul.`)
        } else if (arr.indexOf(subarr) === 1) {
            res.push(`Driving a high-performance sports car can make you feel ${subarr[i]}, with the roar of the engine and the wind in your hair.`)
        } else if (arr.indexOf(subarr) === 2) {
            res.push(`In the journey of life, ${subarr[i]} is the fuel that keeps us moving forward, no matter the challenges we face.`)
        }
    }
    return res;
};

console.log(generateMessages(data));