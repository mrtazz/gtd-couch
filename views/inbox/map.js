function(doc) {
  if (doc.type == "task" && doc.project == "" && doc.duedate == "" &&
      doc.status != "done")
  {
      emit(doc.status, doc);
  }
}

