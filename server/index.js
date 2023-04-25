const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const port = process.env.port || 5000;
const app = express();
// const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);
app.listen(port, console.log(`Server listening on ${port}`));
