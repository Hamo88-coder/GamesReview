import { Games } from "./games.module.js";

const categories = [
    'mmorpg',
    'shooter',
    'sailing',
    'permadeath',
    'superhero',
    "pixel",
];

let categoriesList = document.getElementById('categories-list');


categories.forEach(category => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('nav-item');

    const link = document.createElement('a');
    link.setAttribute('role', 'button');
    link.classList.add('nav-link', 'text-uppercase' );
    if(category == 'mmorpg'){
        link.classList.add('active');
    }
    link.setAttribute('aria-current', 'page');
    link.setAttribute('data-category', category);
    link.textContent = category;

    categoryItem.appendChild(link);
    categoriesList.append(categoryItem);
});

new Games();


