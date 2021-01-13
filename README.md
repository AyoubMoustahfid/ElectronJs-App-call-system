# App Desktop : appel en cours  :smiley:	:smiley:	:smiley:	

Construire une application bureau qui permet de enregistrer les numéro de téléphone et passer les appel.

Bootstrap v5 - ElectronJS - Javascript ES6

L’application doit contenir 3 onglets (avec des icônes) :

++Onglet 1 : ++

Permet de composer un nouveau numéro (Numéros de 1 jusqu’à 9, les alphabets de A jusqu’à Z et les deux caractères [* - #]), un bouton pour passer une appelle et un bouton pour enregistrer le numéro avec le nom. (un exemple dans les resources)
++Onglet 2 : ++

Permet d’afficher l’historique des appels passé, avec la date et l’heure de l’appel. (un exemple dans les resources)
++Onglet 3 : ++

Permet d’afficher les contacts qui sont déjà enregistrés. (un exemple dans les resources)
++Process :++

++Onglet 1 :++

• Réaliser la partie vue (les numéros, les alphabets, le bouton …) + l’événement de la clique ‘Appeler ’ va afficher un Message Box (Pop-up) : Appel en cours + stocker l’historique de l’appel (Numéro appelé, date et l’heure).

++Onglet 2 :++

• Créer une liste View qui affiche l’historique des appels, avec les détails.

++Onglet 3 :++

• liste View qui affiche les contacts enregistrés, avec les détails et créer un événement qui permet de te rediriger vers l’onglet 1 avec le contact sélectionné

Page Home : on a deux formulaire -->> 

   1- formulaire pour ajouter nouveau contact  
   
   2- formulaire pour faire une appel
   
![image](https://user-images.githubusercontent.com/47373251/104463943-abcfe400-55b2-11eb-82f0-99596bb60b9d.png)

Page Contacts : est une list des contacts 

![image](https://user-images.githubusercontent.com/47373251/104464268-05d0a980-55b3-11eb-8f14-0eac33aff468.png)

Page Places : est une list des appels

![image](https://user-images.githubusercontent.com/47373251/104464411-2f89d080-55b3-11eb-93fb-8c9294800408.png)

pour installer l'application tu peux obliger faire cette commande sur terminal ou notre system terminal:
```
npm i
npm i electron
```
   
