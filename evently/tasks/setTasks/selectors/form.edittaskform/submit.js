function()
{
  var app = $$(this).app;
  var form = $(this);
  var f = form.serializeObject();
  var docid = this.parentNode.getAttribute("docid");
  app.db.openDoc(docid, {
      success: function(d)
      {
        d["name"] = f.title;
        d["notes"] = f.notes;
        d["tags"] = f.tags.split(",");
        d["duedate"] = f.duedate;
        d["project"] = $('select#taskeditprojectselect option:selected').val();
        d["contexts"] = $.map($('select#taskeditcontextselect :selected'),
                                        function(e) { return $(e).text(); });
        if (d["project"] == "")
        {
          d["box"] = "inbox";
        }

        app.db.saveDoc(d, {success: function(r){}});
      }
    });

  return false;
};
