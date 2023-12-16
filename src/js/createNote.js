import { nanoid } from 'nanoid';

export function createNote(event) {
  const submitObject = { id: nanoid() };
  new FormData(event.currentTarget).forEach((e, i) => {
    submitObject[i] = e;
  });
  return submitObject;
}
