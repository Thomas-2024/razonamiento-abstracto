window.onload = function () {
    const modalAnswer = document.getElementById('modalAnswer');
    const exerciseSection = document.getElementById('exerciseSection');
    let i = 0;
    fetch('backend/backend.php', {
                method: 'GET'
            }
        )
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
            const exerciseDiv = buitlExercise(image.url, i);
            exerciseSection.appendChild(exerciseDiv);
            i++;
        })
    });
}

function buitlExercise(url, i) {
    const div = document.createElement('div');
    div.className = 'exercise';

    const header = document.createElement('div');
    header.textContent = i + 1 + ". ¿Cuál figura completa lógicamente la serie?";

    const info = document.createElement('a');
    info.textContent = "i";
    info.className = 'info';
    info.onclick = function () {
        showAnswers(i)
    }
    header.appendChild(info);

    div.appendChild(header);

    const img = document.createElement('img');
    img.src = url;
    div.appendChild(img);

    const options = document.createElement('div')
    options.className = 'options';
    const titleOptions = document.createElement('p');
    titleOptions.textContent = "Respuesta";
    titleOptions.style.width = "100%";
    titleOptions.style.margin = "0";

    options.appendChild(titleOptions);
    for (let j = 0; j < 5; j++) {
        const number_option = document.createElement('p');
        number_option.textContent = j + 1;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = "\'" + j + 1 + "\'";
        radio.name = "r"+"\'" + i + 1 + "\'";
        options.appendChild(number_option);
        options.appendChild(radio);
    }
    div.appendChild(options);

    return div;
}

function showAnswers(i) {
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < answers[i].length; j++) {
            
        }
    }
}