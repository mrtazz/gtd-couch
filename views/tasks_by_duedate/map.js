function(doc) {
  if (doc.type == "task" && doc.status != "done" && doc.duedate)
  {
    emit(doc.duedate, doc);
  }
}
