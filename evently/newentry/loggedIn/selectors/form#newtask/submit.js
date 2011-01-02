function() {
  var form = $(this),
    app = $$(form).app,
    f = form.serializeObject(),
    doc = {
      created_at : new Date(),
      owner : $$("#profile").profile.name,
      title : f.title,
      notes : f.notes,
      tags : f.tags.split(","),
      project : $('select#taskprojectselect option:selected').val(),
      contexts : $.map($('select#taskcontextselect :selected'),
                              function(e) { return $(e).text(); }),
      type : "task",
      status: "wip"
    };
  doc.duedate = Date.parse(f.duedate);
  for (var i in doc.tags)
  {
    doc.tags[i] = $.trim(doc.tags[i]);
  }
  // save document to couch
  app.db.saveDoc(doc,
  {
    success : function(r) { }
  });
  //clear forms
  $(':input', form)
  .not(':button, :submit, :reset, :hidden')
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
  $('#projectselect').find('option:first').attr('selected', 'selected').parent('select');

  // update task view
  var node = $("#navul a.active");
  var view = "";
  var key = null;

  if (node.html() == "Inbox")
  {
    view = "inbox";
  }
  else if (node.html() == "Today")
  {
    view = "tasks_by_duedate";
    key = Date.parse((new Date().getMonth +1)+"/"+(new Date()).getDate()+"/"+(new Date()).getFullYear());
  }
  else if (node.html() == "Completed")
  {
    view = "tasks_by_status";
    key = "done";
  }
  else
  {
    if (node.parent().hasClass("context"))
    {
      view = "tasks_by_context";
      key = node.html()
    }
    else
    {
      view = "tasks_by_project";
      key = node.html()
    }
  }

  // set app object
  /**
   * @brief method to take existing data and concatenate them onto tasks
   *
   * @param data obj containing rows to concatenate
   *
   */
  var query_tasks = function(data)
  {
    if (key !== null)
    {
      app.db.view("couchapp/"+view, {
        key: key,
        success: function(resp)
        {
          // combine data
          resp.rows.push.apply(resp.rows, data.rows);
          $("#tasks").trigger("setTasks", resp);
        }
      });
    }
    else
    {
      app.db.view("couchapp/"+view, {
        success: function(resp)
        {
          // combine data
          resp.rows.push.apply(resp.rows, data.rows);
          $("#tasks").trigger("setTasks", resp);
        }
      });

    }
  };

  // query projects and contexts and then call query_tasks
  app.db.view("couchapp/projects_and_contexts", {
    success: query_tasks
  });

  return false;
};
