const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");

const cors = require('cors')
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce" , {
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});
app.use(cors())
app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server running on port"+3000);
});