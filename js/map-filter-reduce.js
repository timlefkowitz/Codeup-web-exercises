const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*
2 Use .map to create an array of strings where each element is a user's email address
 */



let threeOrmoreLangs = users.filter(function(person){
    return person.languages.length >= 3;
}
)
console.log(threeOrmoreLangs);



/*
3 Use .map to create an array of strings where each element is a user's email address
 */



let emailstrings = users.map(function(email){
    return email.email;
})
console.log(emailstrings);


/*
4 Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
 */



let totalyears = users.reduce(function (total, yearsofex){
    return total + yearsofex.yearsOfExperience;
}, 0)

console.log(totalyears);

/*
5 Use .reduce to get the longest email from the list of users.
 */

// let longestemail = users.reduce(function (total, longemail){
//     return total + longemail.email;
// }, 0)
//
// console.log(longestemail);

var longest = users.reduce(
    function (a, b) {
        return a.email.length > b.email.length ? a : b;
    }
);


/*
6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */

let usersnames = users.reduce(function (total, usersnames){
    return total + usersnames.email;
}, 0)

console.log(usersnames);