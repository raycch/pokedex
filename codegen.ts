import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  documents: ["app/queries/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "app/lib/gql/": {
      preset: "client",
    },
  },
};

export default config;
