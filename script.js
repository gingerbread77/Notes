const notesElement = document.querySelector(".notes-section");
const createButton = document.querySelector(".container button");

const displayAllNotes = () => {
  const savedNotes = localStorage.getItem("notes");
  notesElement.innerHTML = savedNotes ? savedNotes : "";
};

// store the note contents in the localstorage
const updateStorage = () => {
  localStorage.setItem("notes", notesElement.innerHTML);
};

// create note
createButton.addEventListener("click", () => {
  const note = document.createElement("p");
  note.classList.add("note");
  note.setAttribute("contenteditable", "true");
  note.innerHTML = `<img src="./img/delete.png" alt="delete icon">`;
  notesElement.appendChild(note);
});

// remove note
notesElement.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".note");
    notes.forEach((n) => {
      n.addEventListener("keyup", updateStorage);
    });
  }
});

displayAllNotes();
