const express = require("express");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
require("dotenv").config();
const port = process.env.port || 5000;
const app = express();
const connectDB = require("./config/db.js");
connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log(`Server listening on ${port}`));
