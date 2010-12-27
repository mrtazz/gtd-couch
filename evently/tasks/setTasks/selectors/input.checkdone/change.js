function()
{
  var app = $$(this).app;
  var box = this;
  var docid = this.parentNode.getAttribute("docid");
  app.db.openDoc(docid, {
      success: function(d)
      {
        if(box.checked)
        {
          d["status"] = "done";
        }
        else
        {
          d["status"] = "wip";
        }
        app.db.saveDoc(d, {
          success: function(r)
          {
            $('li[docid|="'+docid+'"]').slideUp("fast");
          }
        });
      }
  });
}
