const e={form:document.querySelector("#task-form")};e.form.addEventListener("submit",(r=>{r.preventDefault();const t={};new FormData(r.currentTarget).forEach(((e,r)=>{t[r]=e})),e.form.reset(),console.log(t)}));
//# sourceMappingURL=index.a8bda3a4.js.map
