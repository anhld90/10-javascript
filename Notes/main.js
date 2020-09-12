
const btnAdd = document.getElementById('add');
const body = document.querySelector('body');

const arrNote = JSON.parse(localStorage.getItem("notes"));
if(arrNote){
    arrNote.forEach((note) => {
        addNewNote(note);
    });
}

btnAdd.addEventListener('click', () => {
    addNewNote();
});

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNewNote(text = ''){
    let node = document.createElement("div");
    node.classList.add("note");
    node.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    let btnEdit = node.querySelector('.edit');
    let btnDelete = node.querySelector('.delete');
    let main = node.querySelector('.main');
    let textarea = node.querySelector('textarea');

    textarea.value = text;
    main.innerHTML = text;

    btnDelete.addEventListener('click', () => {
        node.remove();
        updateLS();
    });

    btnEdit.addEventListener('click', (e) => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = value;
        updateLS();
    });

    body.appendChild(node);
}