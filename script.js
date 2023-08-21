const addNoteBtn = document.getElementById('addNoteBtn');
const notesGrid = document.getElementById('notesGrid');
const notePopup = document.getElementById('notePopup');
const popupTitle = document.getElementById('popupTitle');
const popupTagline = document.getElementById('popupTagline');
const popupBody = document.getElementById('popupBody');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const closePopup = document.querySelector('.close');

let notes = [];

addNoteBtn.addEventListener('click', openNotePopup);
saveNoteBtn.addEventListener('click', saveNote);
closePopup.addEventListener('click', closeNotePopup);

function openNotePopup() {
    notePopup.style.display = 'block';
}

function closeNotePopup() {
    notePopup.style.display = 'none';
}

function saveNote() {
    const title = popupTitle.value;
    const tagline = popupTagline.value;
    const body = popupBody.value;

    if (title && body) {
        const note = { title, tagline, body, pinned: false };
        notes.push(note);
        updateNotesGrid();
        closeNotePopup();
    }
}

function updateNotesGrid() {
    notesGrid.innerHTML = '';

    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.tagline}</p>
            <p>${note.body}</p>
        `;
        noteDiv.addEventListener('click', () => openEditPopup(index));
        notesGrid.appendChild(noteDiv);
    });
}

function openEditPopup(index) {
    popupTitle.value = notes[index].title;
    popupTagline.value = notes[index].tagline;
    popupBody.value = notes[index].body;
    notePopup.style.display = 'block';
}

updateNotesGrid();
