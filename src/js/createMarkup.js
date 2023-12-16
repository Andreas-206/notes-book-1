export function createNoteMarkup(submitObject) {
  return `
    <li class="task-list-item">
        <button class="task-list-item-btn">Удалить</button>
        <h3>${submitObject.taskName}</h3>
        <p>${submitObject.taskText}</p>
     </li>`;
}

export function createNotesMarkup(notesArr) {
  return notesArr.reduce((acc, elem) => acc + createNoteMarkup(elem), '');
}
