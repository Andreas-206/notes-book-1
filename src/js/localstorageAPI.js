export function add(submitObject) {
  const notes = getAllNotes();
  notes.push(submitObject);
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function getAllNotes() {
  return JSON.parse(localStorage.getItem('notes')) || [];
}
