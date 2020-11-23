const mongoose = require("mongoose");
const uri =
  "mongodb+srv://swe_user:mwwQYNReDQPi0bgw@cluster0.4dg8e.mongodb.net/swe?retryWrites=true&w=majority";

const connect = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("connected to database");
});

const linkSchema = new mongoose.Schema({
  title: String,
  links: Array,
});

const Links = mongoose.model("links", linkSchema, "adminRoles");

const find = async role => {
  const data = await Links.find(
    { title: ["Support", role] },
    "title -_id links"
  );
  return data;
};

exports.connect = connect;
exports.find = find;
