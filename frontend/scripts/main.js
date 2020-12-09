/**
 * Description de la structure de notre site en général
 * Notre code JS s'OCCUPERA tout seul de charger ces informations
 * dans notre page
 */
const siteTitle = "My website";
const menu = {
    'Accueil': './index.html',
}

start();

function start() {
    applyTitle();
    displayMenu();
}

function applyTitle() {
    document.querySelector('head title').innerText = siteTitle;
    document.querySelector('h1').innerText = siteTitle;
}

function displayMenu() {
    /**
     * Affichera automatiquement votre menu si vous avez défini une balise 
     * ayant pour id `auto-main-menu`
     */
    document.querySelector('#auto-main-menu').appendChild(document.createElement('ul'));
    for (menuItem in menu) {
        const domItem = document.createElement('li');
        domItem.innerText = menuItem;
        domItem.title = menu[menuItem];
        domItem.dataset.link = menu[menuItem]; 

        domItem.onclick = function(ev) {
            window.location.href = ev.target.dataset.link;
        } 
        document.querySelector('#auto-main-menu ul').appendChild(domItem);
    }
}
