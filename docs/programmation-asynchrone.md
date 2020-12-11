# La programmation asynchrone

Lorsque une programme s'exécute, il le fait ligne par ligne. On parle de **programmation procédurale**, car c'est comme suivre une procédure : on réalise une instruction, puis on passe à la suivante une fois qu'elle est terminée.

> C'est commme lire un livre : on lit une phrase (ou un paragraphe/chapitre), puis on passe à la suivante.

Cela étant, il est parfois intéressant de partager les tâches entre plusieurs personnes : pendant qu'un installe un serveur Apache, un autre peut configurer un Git, un autre encore commencer à coder. Cela permet de gagner du temps. C'est pareil en programmation. Il est parfois intéressant de ne pas attendre qu'une tâche soit terminée pour continuer à faire autre chose. D'autant que certaines tâches ne solicitent pas du tout votre ordinateur : lorsque vous demandez à Google de vous donner la réponse à une question très complexe, ses serveurs vont travailler quelques secondes/minutes/heures/années, mais votre ordinateur est serein, il attend juste de recevoir la réponse. En d'autres termes, votre ordinateur ne fait rien.

Il peut donc être intéressant de ne pas bloquer votre ordinateur et de lui permettre de faire d'autres choses pendant ce temps (spammer le bouton f5 par exemple).

Pour faire ça on peut exécuter des morceaux de code en parallèle d'autres morceaux de codes qui sont potentiellement longs (il existe plein d'autres bonnes raisons de paralléliser des traitments mais on ne va pas en parler ici). Concrètement, cela signifie que nos deux blocs de code vont faire leur vie indépendamment, si l'un bloque/est très long/plante, l'autre pas forcément.

Concrètement, votre système d'exploitation va créer un nouveau processus pour ce morceau de code exécuté en parallèle. (jetez un oeil à votre gestionnaire des tâches ou `top` en ligne de commande sous Linux) pour voir les processus qui consomment le plus.

Il est pertinent de paralléliser certains traitements mais pas tous.

> Lire un roman policier à 8 personnes qui se répartissent le travail ne sera pas une bonne expérience de lecture, se répartir les épisodes d'une série non plus. Par contre, se répartir la lecture d'un livre technique traitant de la manière de déployer une application est plus intéressant : chacun apprend puis fait un résumé aux autres sans que cela ne gène. au contraire, au final on gagne du temps.

En web, notre bête noire est le temps d'exécution d'une requête (plus réception de sa réponse bien sûr). Cela prend quelques dizièmes de secondes là où une opération classique prendra quelques centièmes/millièmes voire moins. On parle donc d'opérations mille fois plus longues...

C'est pourquoi on aime effectuer ce type de requête de manière asynchrone quand on peut. Un cas particulier mais assez fréquent : le serveur est indisponible. Le timeout par défaut est généralement de 30 secondes. Imaginez que vous demandez un émoji au serveur en synchrone et que vous ne puissiez plus rien faire dans votre navigateur jusqu'à ce qu'il décide au bout de ces 30 secondes que le serveur n'est pas joignable :heart:.

## L'asynchrone a deux un inconvénients :

- plus on l'utilise, plus cela fabrique de processus (lire un livre à 30 nécessite d'avoir plein de copains et une grande maison (et du gel hydroalcoolique))
- il faut coordonner tout ce monde ! (commment synthétiser le travail de 30 personnes et qu'il soit compréhensible ?!)

Le deuxième point est le plus problématique en programmation. Il faut être sacrément organiser pour arriver à gérer plein d'appels asynchrones.

## Les callbacks

Lorsqu'une fonction asynchrone a fini de s'exécuter, on utilise généralement un `callback` pour réaliser des traitements dépendant du résultat de cette fonction.

Par exemple `fetch()` en JS est une fonction asynchrone. Vous allez logiquement vouloir réaliser des traitements sur la ressource que `fetch()` va vous retourner (le stocker dans une variable, l'afficher dans le navigateur, etc.). C'est grace à un callback que vous pouvez faire cela.

## Les promises (promesse en français)

C'est des callbacks !

C'est une manière **très propre** de réaliser des callbacks.
On ne va pas entrer dans les détails mais lorsque vous voyez une fonction utiliser `.then()` et/ou `.catch()`, vous avez à faire à une `promise`.

```javascript
maFonctionAsynchrone(zefgzjfg)
    .then(fonction A)
    .catch(fonction B)
// code code code...
```

C'est une manière de dire :

> Si `maFonctionAsynchrone` s'est bien **terminée**, exécute la fonction A, s'il y a eu un souci, exécute la fonction B.

Les fonctions A et B sont ici des callbacks (un pour le cas où ça se passe bien, l'autre pour le cas où ça se passe mal).

Notez que la suite du code sera exécutée sans attendre que la fonction asynchrone soit terminée. Faites donc attention à ne pas utiliser de variables ou autres qui seraient définies dans les fonctions A ou B.
