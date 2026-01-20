const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
    {
    name: "Kent",
    yearOfBirth: 1912,
    },
]

const findTheOldest = function(people) {
    let currentOldest = people[0];

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else if (!person.yearOfDeath) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        }
        if (person.age > currentOldest.age) {
            currentOldest = person;
        }
    }

    return currentOldest;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
