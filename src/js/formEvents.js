import { refs } from './refs';
import { add } from './localstorageAPI';
import { createNoteMarkup } from './createMarkup';
import { createNote } from './createNote';

export function submitMainForm(event) {
  event.preventDefault();
  const submitObject = createNote(event);

  refs.form.reset();

  add(submitObject);

  const markup = createNoteMarkup(submitObject);
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}
