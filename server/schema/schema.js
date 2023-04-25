const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
} = require("graphql");
// client type
const ClientType = GraphQLObjectType({
  name: "Client",
  fields: () => {
    id: {
      type: GraphQLID;
    }
    name: {
      type: GraphQLString;
    }
    email: {
      type: GraphQLString;
    }
    phone: {
      type: GraphQLString;
    }
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    client: { type: ClientType },
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return client.find((client) => client.id === args.id);
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
