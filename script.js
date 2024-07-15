document.addEventListener('DOMContentLoaded', function() {
    fetch('files.json')
        .then(response => response.json())
        .then(files => {
            const soundboard = document.getElementById('soundboard');

            files.forEach(filename => {
                const buttonLabel = filename.replace(/_/g, ' ').replace('.mp3', '');
                const button = document.createElement('button');
                button.classList.add('button');
                button.innerText = buttonLabel;

                button.addEventListener('click', () => {
                    const audio = new Audio(`bauersamples/${filename}`);
                    audio.play();
                });

                soundboard.appendChild(button);
            });
        })
        .catch(error => console.error('Error loading files:', error));
});
