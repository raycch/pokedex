import { graphql } from "@/app/lib/gql";
const getDetails = graphql(`
  query getDetails($name: String) {
    pokemons: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      sprites: pokemon_v2_pokemonsprites {
        image: sprites(path: "other.dream_world.front_default")
        fallback: sprites(path: "other.official-artwork.front_default")
      }
      types: pokemon_v2_pokemontypes {
        slot
        type: pokemon_v2_type {
          name
        }
      }
      specy: pokemon_v2_pokemonspecy {
        color: pokemon_v2_pokemoncolor {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
    }
  }
`);
export default getDetails;
