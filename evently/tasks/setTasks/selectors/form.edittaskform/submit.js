function()
{
  var app = $$(this).app;
  var form = $(this);
  var f = form.serializeObject();
  var docid = this.parentNode.getAttribute("docid");
  app.db.openDoc(docid, {
      success: function(d)
      {
        d["title"] = f.title;
        d["notes"] = f.notes;
        d["tags"] = f.tags.split(",");
        var date = Date.parse(f.duedate);
        d["duedate"] = isNaN(date) ? "" : date;
        d["project"] = $('select#taskeditprojectselect option:selected').val();
        d["contexts"] = $.map($('select#taskeditcontextselect :selected'),
                                        function(e) { return $(e).text(); });
        app.db.saveDoc(d, {
          success: function(r)
          {
            $('li[docid|="'+docid+'"]').children("div.taskeditor").slideUp("fast");
          }
        });
      }
    });

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
    var date = new Date();
    key = Date.parse((date.getMonth() +1)+"/"+date.getDate()+"/"+date.getFullYear());
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
