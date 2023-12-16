export function add(submitObject){
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(submitObject);
    localStorage.setItem('notes', JSON.stringify(notes));
}