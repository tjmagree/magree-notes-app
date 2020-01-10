import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const updatedElement = document.querySelector('#update-text')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    updatedElement.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updatedElement.textContent = generateLastEdited(note.updatedAt)
})

removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
      initializeEditPage(noteId)
    }
})