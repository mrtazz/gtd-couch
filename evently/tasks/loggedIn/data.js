function(data){
  // restructure data for easier access
  var tasks = [];
  for (r in data.rows)
  {
    tasks.push(data.rows[r]["value"]);
  }
  return {"tasks": tasks};
}
