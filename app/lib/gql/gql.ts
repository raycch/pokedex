/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getDetails($name: String) {\n    pokemons: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      id\n      name\n      sprites: pokemon_v2_pokemonsprites {\n        image: sprites(path: "other.dream_world.front_default")\n        fallback: sprites(path: "other.official-artwork.front_default")\n      }\n      types: pokemon_v2_pokemontypes {\n        slot\n        type: pokemon_v2_type {\n          name\n        }\n      }\n      specy: pokemon_v2_pokemonspecy {\n        color: pokemon_v2_pokemoncolor {\n          name\n        }\n      }\n      stats: pokemon_v2_pokemonstats {\n        base_stat\n        stat: pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n':
    types.GetDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getDetails($name: String) {\n    pokemons: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      id\n      name\n      sprites: pokemon_v2_pokemonsprites {\n        image: sprites(path: "other.dream_world.front_default")\n        fallback: sprites(path: "other.official-artwork.front_default")\n      }\n      types: pokemon_v2_pokemontypes {\n        slot\n        type: pokemon_v2_type {\n          name\n        }\n      }\n      specy: pokemon_v2_pokemonspecy {\n        color: pokemon_v2_pokemoncolor {\n          name\n        }\n      }\n      stats: pokemon_v2_pokemonstats {\n        base_stat\n        stat: pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getDetails($name: String) {\n    pokemons: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      id\n      name\n      sprites: pokemon_v2_pokemonsprites {\n        image: sprites(path: "other.dream_world.front_default")\n        fallback: sprites(path: "other.official-artwork.front_default")\n      }\n      types: pokemon_v2_pokemontypes {\n        slot\n        type: pokemon_v2_type {\n          name\n        }\n      }\n      specy: pokemon_v2_pokemonspecy {\n        color: pokemon_v2_pokemoncolor {\n          name\n        }\n      }\n      stats: pokemon_v2_pokemonstats {\n        base_stat\n        stat: pokemon_v2_stat {\n          name\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
