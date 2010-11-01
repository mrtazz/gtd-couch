function(data) {

  var projects = [];
  var contexts = [];

  // parse the result and divide in contexts and projects
  for (r in data.rows)
  {
    if (data.rows[r].value.type == "context")
    {
      var c = data.rows[r].value;
      c["shorttitle"] = c.title.substring(0,12)+"...";
      contexts.push(c);
    }
    else
    {
      var p = data.rows[r].value;
      p["shorttitle"] = p.title.substring(0,12)+"...";
      projects.push(p);
    }
  }

  return {"projects": projects, "contexts": contexts };
}
