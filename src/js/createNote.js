export function createNote (event){
    const submitObject = {};
    new FormData(event.currentTarget).forEach((e, i) => {
        submitObject[i] = e;
    }) 
    return submitObject;
}