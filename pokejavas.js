
// On déclare des variables qui sont des adresses des <div> du HTML pour envoyer des informations des données sur la page HTML 

const pokemonListContainer = document.getElementById("pokemon-list");  // division pour la liste des pokémon
const pokemonDetailsElement = document.getElementById("pokemon-details"); // division pour le détails du pokémon sélectionné


// On utilise directement la méthode fecth avec l'url de l'API POKEAPI pour afficher la liste des pokémons quand on accède à la page
fetch("https://pokeapi.co/api/v2/pokemon?limit=180")
    .then(response => response.json())  //  On traduit la réponse de l'url en json pour pouvoir l'utiliser avec le javascript
    .then(data => {
        let compt = 1;      // On initialise un compteur qui servira d'ID pour afficher chaque pokémon 
        data.results.forEach(pokemon => {       // On crée une boucle pour chaque pokémon récupéré par le lien
            const pokemonName = pokemon.name;       // On récupère l'attribut name du lien et on l'attribue à la variable constante pokemonName
            const listItem = document.createElement("div"); // on crée une balise div qui comprendra toute la liste des pokemons et leurs images
            const pokemonImage = document.createElement("img"); // on crée une balise pour inclure l'image du pokemon

            const Divimg = document.createElement("div"); // On crée une nouvelle balise pour contenir l'image et mettre en forme
      
            pokemonImage.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${compt}.png`; // on adresse le lien de l'image du pokemon selon son ID grace au compteur
            pokemonImage.alt= pokemonName; // Pour placer le nom à coté de l'image

            
            listItem.classList.add("pokemon-carte") // on donne une classe pour la balise principale pour pouvoir la modifier avec le CSS

            Divimg.style.cursor = "pointer"; // On donne un style à la balise img pour avoir le logo pointer de la souris en passant sur l'image
            Divimg.addEventListener("click", () => afficherDetailsPokemon(pokemon.url)); // On met un évènement qui réagit quand on clique sur l'image et permet l'éxécution de la fonction pour afficher le détails du pokémon

            Divimg.appendChild(pokemonImage);  // on intègre l'image dans la balise de l'image          
            
            listItem.appendChild(Divimg); 
            listItem.appendChild(document.createTextNode(pokemonName));  // on intègre la balise de l'image ainsi que le nom du pokémon dans la balise principale (On crée une zone de texte avec createTextNode)

            
            pokemonListContainer.appendChild(listItem); // Finalement on place tout le contenu dans la balise de la page HTML
            compt= compt+1; // incrémentation du compteur
            
            
        });
    })
    .catch(error => console.log("Erreur  lors de l' affichage de la liste : " + error)); // Message en cas d'erreur du chargement de la liste



function afficherDetailsPokemon(url){  // Fonction qui affiche le détails du pokémon quand on clique sur son image dans la site 
    fetch(url)
        .then((response) => response.json())
        .then((pokemon) => {
            
              // On place tout ce contenu traduit en HTML pour afficher tous les détails des pokémons
            pokemonDetailsElement.innerHTML = `     
            <div class ="details">
                <h2>Nom :${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>ID : ${pokemon.id}</p>
                <p>HP : ${pokemon.stats[0].base_stat} |   Attack: ${pokemon.stats[1].base_stat} | Defense: ${pokemon.stats[2].base_stat} | SP Attack: ${pokemon.stats[3].base_stat} | SP Defense: ${pokemon.stats[4].base_stat}  | Speed: ${pokemon.stats[5].base_stat}</p>
                <p>Poids : ${pokemon.weight / 10}kg</p>
                <p>Taille : ${pokemon.height / 10}m</p>
            </div>
            `;                
        })
        .catch((error) =>
            console.error("Erreur lors de la recupération des détails")
        );
}
 // Fonction qui est activé avec le bouton de la page HTML qui prend comme variable le contenu de l'input qui afficher le pokemon  
function ChercherParID(){
    const pokemonID = document.getElementById("pokemon-id").value;
    console.log(pokemonID);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`) 
        .then(response => response.json())
        .then((pokemon) => {

            pokemonDetailsElement.innerHTML = `
            <div class ="details">
                <h2>Nom :${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>ID : ${pokemon.id}</p>
                <p>HP : ${pokemon.stats[0].base_stat} |   Attack: ${pokemon.stats[1].base_stat} | Defense: ${pokemon.stats[2].base_stat} | SP Attack: ${pokemon.stats[3].base_stat} | SP Defense: ${pokemon.stats[4].base_stat}  | Speed: ${pokemon.stats[5].base_stat}</p>
                <p>Poids : ${pokemon.weight / 10}kg</p>
                <p>Taille : ${pokemon.height / 10}m</p>
            </div>
                `;

        })
        .catch(error => {console.log("Erreur lors de la recherche par ID : " + error);
        alert("Erreur : Donner un nom ou ID existant")  // Affiche un commentaire à l'utilisateur pour indiquer l'erreur
         });
}
