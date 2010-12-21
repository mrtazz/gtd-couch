function(e, data) {
  // restructure data for easier access
  var tasks = [];
  var projects = [""];
  var contexts = [];
  // iterate over all rows and sort into lists
  for (r in data.rows)
  {
    var obj = data.rows[r]["value"];
    if (obj.type == "task")
    {
      if (obj["owner"] == $$('#profile').profile.name)
      {
        if (obj.status && obj["status"] == "done")
        {
          obj["checked"] = true;
        }
        tasks.push(obj);
      }
    }
    else if (obj.type == "project")
    {
      if (obj["owner"] == $$('#profile').profile.name)
      {
        projects.push(obj);
      }
    }
    else if (obj.type == "context")
    {
      if (obj["owner"] == $$('#profile').profile.name)
      {
        contexts.push(obj.title);
      }
    }
  }
  // iterate over tasks to assign projects and contexts
  for (t in tasks)
  {
    var obj = tasks[t];
    obj.allcontexts = contexts.slice();
    obj.allprojects = [];
    for (p in projects)
    {
      if (projects[p]["title"] != obj.project)
      {
        obj.allprojects.push(projects[p]);
      }
    }
    for (c in obj.contexts)
    {
      var idx = obj.allcontexts.indexOf(obj.contexts[c]);
      if(idx!=-1) obj.allcontexts.splice(idx, 1);
    }
  }
  return {"tasks": tasks};
}
