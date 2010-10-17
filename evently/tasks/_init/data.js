function(data){
  var tasks = [];
  for (r in data.rows)
  {
    tasks.push(data.rows[r]["value"]);
  }
  $.log(tasks);
  return {"tasks": tasks};
}
