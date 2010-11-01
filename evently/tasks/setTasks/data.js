function(e, data) {
  // restructure data for easier access
  var tasks = [];
  for (r in data.rows)
  {
    var task = data.rows[r]["value"];
    if (task.status && task["status"] == "done")
    {
      task["checked"] = true;
    }
    tasks.push(task);
  }
  return {"tasks": tasks};
}
