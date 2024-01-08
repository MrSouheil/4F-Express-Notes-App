document.addEventListener('DOMContentLoaded', function() {
    fetch('/notes')
    .then(response => response.json())
    .then(data => {
        const notesContainer = document.getElementById('notes');
        data.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <hr>
            `;
            notesContainer.appendChild(noteDiv);
        });
    })
    .catch(error => console.error('Error:', error));
});
