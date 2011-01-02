function(doc){
  if (doc.type == "task")
  {
    emit(null, doc);
  }
};
