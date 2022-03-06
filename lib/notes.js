const fs = require("fs");
const path = require("path");

function renderNotes(body, notes) {
    const note = body;
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
    return note;
}

function deleteNote(notes, id) {
    let ID = parseInt(id);
    notes.splice(ID, 1);

    for (let i = ID; i < notes.length; i++) {
        notes[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
}

module.exports = {
    renderNotes,
    deleteNote
};