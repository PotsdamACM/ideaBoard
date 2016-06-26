var mongoose = require('mongoose');
var ideaSchema = new mongoose.Schema({
  text: String,
  username: String,
  idea_name: String,
  created_on: {type: Date, default: Date.now}
});
// declare a model called Idea which has schema userSchema
mongoose.model("Idea", ideaSchema);
