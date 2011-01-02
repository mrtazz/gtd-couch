function()
{
  var app = $$(this).app;
  var box = this;
  var docid = this.parentNode.getAttribute("docid");
  app.db.openDoc(docid, {
      success: function(doc)
      {
        if(box.checked)
        {
          var d = new Date();
          var today = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
          doc["completed_at"] = today;
          doc["status"] = "done";
        }
        else
        {
          doc["status"] = "wip";
          doc["completed_at"] = "";
        }
        app.db.saveDoc(doc, {
          success: function(r)
          {
            $('li[docid|="'+docid+'"]').slideUp("fast");
          }
        });
      }
  });
}
