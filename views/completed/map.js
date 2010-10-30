function(doc) {
  if (doc.type == "task" && doc.status == "done")
  {
    emit(null, doc);
  }
}
