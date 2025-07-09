const dir = "Ejercicios/";

window.onload = function () {
    const exerciseSection = document.getElementById('exerciseSection');
    const urlImages = [];
    for (let i = 0; i < 48; i++) {
        urlImages.push(dir + "Ejercicio" + (i+1) + ".gif");
    }
    
    for (let i = 0; i < urlImages.length; i++) {
        const exerciseDiv = buitlExercise(urlImages[i], i);
        exerciseSection.appendChild(exerciseDiv);
    }
}

function buitlExercise(url, i) {
    const div = document.createElement('div');
    div.className = 'exercise';

    const text = document.createElement('div');
    text.textContent = i + 1 + ". ¿Cuál figura completa lógicamente la serie?";
    div.appendChild(text);

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