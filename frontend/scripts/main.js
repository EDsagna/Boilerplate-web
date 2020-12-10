/**
 * Description de la structure de notre site en général
 * Notre code JS s'OCCUPERA tout seul de charger ces informations
 * dans notre page
 */
const siteTitle = "My website";
const menu = {
    'Accueil': './index.html',
    'A propos': './about.html',
}

start();

function start() {
    /**
     * On appelle à la suite ces deux fonctions.
     * Plus tard, start() fera probablement d'autres choses,
     * c'est pour cela qu'on a choisi de créer cette fonction
     * plutôt qu'appeler les deux fonctions directement en dehors.
     */
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
        /**
         * menuItem a pour valeur à chaque itération la clé actuelle de notre objet `menu`
         * Par exemple, il vaudra `Accueil` la première fois, puis `A propos` la deuxième
         * 
         * menuItem est ce que l'on appelle une `clé`
         * menu[menuItem] est ce que l'on appelle la "valeur de la clé `menuItem`"
         */ 
        const domItem = document.createElement('li');       // <li></li>
        domItem.innerText = menuItem;                       // <li>Accueil</li>
        domItem.title = 'Découvrir la page ' + menuItem;    // <li title="Découvrir la page Accueil">Accueil</li>
        domItem.dataset.link = menu[menuItem];              // <li title="Découvrir la page Accueil" data-link="./index.html">Accueil</li>

        domItem.onclick = function(ev) {
            window.location = ev.target.dataset.link;
        }                                                   // <li title="Découvrir la page Accueil" data-link="./index.html" onclick="..."">Accueil</li>
        document.querySelector('#auto-main-menu ul').appendChild(domItem);
    }
}
