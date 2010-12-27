function()
{
  // get associated document and delete it
  var app = $$(this).app;
  var box = this;
  var docid = this.parentNode.getAttribute("docid");
  app.db.openDoc(docid, {
      success: function(d)
      {
        app.db.removeDoc(d, {
          success: function(r)
          {
            $('li[docid|="'+docid+'"]').slideUp("fast");
          }
        });
      }
  });
}
