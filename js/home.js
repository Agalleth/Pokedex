$.ajax({
//  beforeSend:()=>{ //antes de mandar la solicitud haz algo
//no se hace JSON parse porque jquery lo hace por nosotros
    url: `https://pokeapi.co/api/v2/pokedex/1/`
    success: data => {
      console.log(data);
    }
});




//
// function handleResponse(data) {
//     console.log(data);
// }
//
//
// $.ajax({
//   url: `https://pokeapi.co/api/v2/pokemon-species/1/`
// }).done(handleResponse);
