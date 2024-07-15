document.addEventListener('DOMContentLoaded', function() {
    fetch('bauersamples/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, "text/html");
            const items = htmlDocument.querySelectorAll("a[href$='.mp3']");
            const soundboard = document.getElementById('soundboard');

            items.forEach(item => {
                const filename = item.href.split('/').pop();
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
        });
});
