# Examen PokéAPI markdown Axel TORRES

## 1.Création d'une page web simple

1. Question : Comment structurer une page HTML pour afficher une liste de Pokémon et un formulaire de recherche ?

J'utilise 3 balises en tout, une balise de section pour le formualire de recherche puis 2 balises div pour afficher la liste des pokémons et le pokémon sélectionné. 

## 2.Affichage de plusieurs pokémon Issus d'une liste 

2. Question : Comment récupérer et afficher une liste initiale de Pokémon avec l'API PokeAPI ?

J'utilise une méthode fetch pour récupérer les noms des pokémons à partir de l'API PokeAPI en traduisant le lien en élément json .

## 3. Présentation de l'API PokeAPI

3. Question : Comment explorer l'API PokeAPI pour trouver les informations nécessaires ?

On accède au site du lien pour repérer les informations et comment les transférer dans notre javascript .

## 4. Recherche de Pokémon Grâce à un Formulaire

4. Question : Comment implémenter une fonctionnalité de recherche pour trouver des Pokémon par leur
numéro ?


## 5. Gestion d'Erreur
5. Question : Comment gérer les erreurs, comme une recherche qui ne retourne aucun résultat ?

J'utilise des blocs sur mon appel fetch en cas d'erreurs pour repérer le problème et aussi un affichage d'un message à l'utilisateur lors d'une erreur à la recherche d'un pokémon 

## 6. Manipulation d'Objet et de Tableau en JS
6. Question : Comment manipuler les objets et tableaux retournés par l'API pour afficher les informations des
Pokémon ?

Pour la liste des pokemons j'ai utilisé un forEach pour chaque pokémon retourné par l'API pour pouvoir les afficher et permettre de pouvoir intéragir avec eux 

## 7. Utilisation de Fetch et Résolution de Promesses
7. Question : Comment utiliser fetch pour faire des requêtes asynchrones et traiter les données retournées ?

On utilise .then() pour extraires les réponses du fetch et pouvoir intéragirent avec eux


## 8. Usage du Format JSON
8. Question : Comment travailler avec le format JSON pour extraire les données retournées par l'API ?

On traduit la réponse de l'API en format json pour pouvoir l'exploiter en JS avec la méthode .json()