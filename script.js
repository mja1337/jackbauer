document.addEventListener('DOMContentLoaded', function() {
    fetch('files.json')
        .then(response => response.json())
        .then(files => {
            const soundboard = document.getElementById('soundboard');

            // Create a button for each sound file
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

            // Create a "Random" button
            const randomButton = document.createElement('button');
            randomButton.classList.add('button');
            randomButton.innerText = 'Random';

            randomButton.addEventListener('click', () => {
                const randomFile = files[Math.floor(Math.random() * files.length)];
                const audio = new Audio(`bauersamples/${randomFile}`);
                audio.play();
            });

            soundboard.appendChild(randomButton);
        })
        .catch(error => console.error('Error loading files:', error));
});
