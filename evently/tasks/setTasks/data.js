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
        if (obj.project.length > 15)
        {
          obj["shortproject"] = obj.project.substring(0,12)+"...";
        }
        else
        {
          obj["shortproject"] = obj.project;
        }
        tasks.push(obj);
      }
    }
    else if (obj.type == "project")
    {
      if (obj.title.length > 15)
      {
        obj["shorttitle"] = obj.title.substring(0,12)+"...";
      }
      else
      {
        obj["shorttitle"] = obj.title;
      }
      if (obj["owner"] == $$('#profile').profile.name)
      {
        projects.push(obj);
      }
    }
    else if (obj.type == "context")
    {
      if (obj.title.length > 15)
      {
        obj["shorttitle"] = obj.title.substring(0,12)+"...";
      }
      else
      {
        obj["shorttitle"] = obj.title;
      }
      if (obj["owner"] == $$('#profile').profile.name)
      {
        contexts.push(obj);
      }
    }
  }
  // iterate over tasks to assign projects and contexts
  for (t in tasks)
  {
    var obj = tasks[t];
    obj.allcontexts = []; //contexts.slice();
    obj.allprojects = [];
    for (p in projects)
    {
      if (projects[p]["title"] != obj.project)
      {
        obj.allprojects.push(projects[p]);
      }
    }
    //
    // loop through all contexts and sort them into the ones belonging to the
    // task and the other ones. This is done to mark the contexts as assigned
    // in the edit view.
    //
    for (c in contexts)
    {
      var ctx = contexts[c];
      var idx = obj.contexts.indexOf(ctx.title);
      // if it does not exist in obj.context, push to allcontexts
      if(idx==-1)
      {
        obj.allcontexts.push(ctx);
      }
      else
      {
        obj.contexts.splice(idx, 1);
        obj.contexts.push(ctx);
      }
    }
  }
  return {"tasks": tasks};
}
