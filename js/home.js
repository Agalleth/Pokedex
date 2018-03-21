// $(document).ready(function(){
// 	 $('.modal').modal();

const pokContainer = $('#pokemon-container');
loadPage = () => {
	pokContainer.html(" ");
	addingPokemons();
};
let addPokemon = function(pokemonster) {
	const listPokemons = pokemonster.pokemon_entries;
	let template = ' ';
 //Limitando
	listPokemons.forEach(function(pokemon, index){
		if(index < 18) {
			// console.log(pokemon)
		let specie = pokemon.pokemon_species.name;
		template +=
    `<div class="col s6 m2">
    <div class="card transparent">
		<img class="whos" src="../assets/images/whos.jpg">
    <h4 class="white-text center-align light italic stroke">${specie}</h4>
    </div>
		</div>`;

		pokContainer.html(template);
		}
	})
};

const addingPokemons = () => {
	$.ajax({
		url : `https://pokeapi.co/api/v2/pokedex/1/`
	}).done(addPokemon)
};
//////Añadir sprites de pokemon de la API////////
// {
// "created": "2013-11-02T12:34:19.113143",
// "id": 1,
// "image": "/media/img/1383395659.12.png",
// "modified": "2013-11-02T12:34:19.113053",
// "name": "Bulbasaur_blue_red",
// "pokemon": {
// "name": "bulbasaur",
// "resource_uri": "/api/v1/pokemon/1/"
// },
// "resource_uri": "/api/v1/sprite/1/"
// }
////////////
//endpoint individual https://pokeapi.co/api/v2/pokemon-species/1/
$(document).ready(loadPage);
