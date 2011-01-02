function(doc) {
  if ((doc.type == "project") || (doc.type == "context"))
  {
    emit(null, doc);
  }
}
