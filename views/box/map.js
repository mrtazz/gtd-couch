function(doc) {
  if (doc.type == "task" && doc.box && doc.status != "done")
  {
    emit(doc.box, doc);
  }
}
