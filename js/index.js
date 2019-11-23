'use strict'

import users from "./users.js";

/*
Задание 1
Получить массив имен всех пользователей (поле name). 
*/

const getUserNames = users => users.map(user => user.name);

console.log('-----  Задание 1  -----');
console.log(getUserNames(users));



/*
Задание 2
Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/

const getUsersWithEyeColor = (users, color) => users
.filter(user => user.eyeColor === color);

console.log('-----  Задание 2  -----');
console.log(getUsersWithEyeColor(users, 'blue'));



/*
Задание 3
Получить массив имен пользователей по полу (поле gender).
*/

const getUsersWithGender = (users, gender) => users
.filter(user => user.gender === gender)
.map(user => user.name);

console.log('-----  Задание 3  -----');
console.log(getUsersWithGender(users, 'male'));



/*
Задание 4
Получить массив только неактивных пользователей (поле isActive).
*/

const getInactiveUsers = users => users
.filter(user => !user.isActive);

console.log('-----  Задание 4  -----');
console.log(getInactiveUsers(users));


/*
Задание 5
Получить пользоваля (не массив) по email (поле email, он уникальный).
*/

const getUserWithEmail = (users, email) => users
.find(user => user.email === email);

console.log('-----  Задание 5  -----');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 



/*
Задание 6
Получить массив пользователей попадающих в возрастную категорию 
от min до max лет (поле age).
*/

const getUsersWithAge = (users, min, max) => users
.filter(user => user.age > min && user.age < max);

console.log('-----  Задание 6  -----');
console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));



/*
Задание 7
Получить общую сумму баланса (поле balance) всех пользователей.
*/

const calculateTotalBalance = users => users
.reduce((total, user) => total + user.balance, 0)

console.log('-----  Задание 7  -----');
console.log(calculateTotalBalance(users)); // 20916



/*
Задание 8
Массив имен всех пользователей у которых есть друг с указанным именем.
*/

const getUsersWithFriend = (users, friendName) => users
.filter(user => user.friends.includes(friendName))
.map(user => user.name);

console.log('-----  Задание 8  -----');
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));


/*
Задание 9
Массив имен (поле name) людей, отсортированных в зависимости 
от количества их друзей (поле friends)
*/

const getNamesSortedByFriendsCount = ([...arrForSortUsers]) => arrForSortUsers
.sort((userA, userB) => userA.friends.length - userB.friends.length)
.map(user => user.name);

console.log('-----  Задание 9  -----');
console.log(getNamesSortedByFriendsCount(users));


/*
Задание 10
Получить массив всех умений всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и они должны быть 
отсортированы в алфавитном порядке.
*/

console.log('-----  Задание 10  -----');
const getSortedUniqueSkills = users => users
.reduce((acc, {skills}) => [...acc, ...skills], [])
.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
.sort()

console.log(getSortedUniqueSkills(users));