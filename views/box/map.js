function(doc) {
  if (doc.type == "task" && doc.box)
  {
    emit(doc.box, doc);
  }
}
