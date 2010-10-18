function(data) {

  var projects = [];
  var contexts = [];

  // parse the result and divide in contexts and projects
  for (r in data.rows)
  {
    if (data.rows[r].value.type == "context")
    {
      contexts.push(data.rows[r].value);
    }
    else
    {
      projects.push(data.rows[r].value);
    }
  }

  return {"projects": projects, "contexts": contexts };
}
