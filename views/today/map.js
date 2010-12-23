function(doc) {
  if (doc.type == "task" && doc.status != "done")
  {
    var d = new Date();
    var today = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    if (doc.duedate == today)
    {
      emit(today, doc);
    }
  }
}
