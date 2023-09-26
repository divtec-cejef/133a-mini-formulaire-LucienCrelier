/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

// récupération du <body>
const body = document.querySelector('body');



// récupération de la liste déroulante
const listBackground = body.querySelector('#bg');

// écouter un évènement de "change" sur la liste déroulante

listBackground.addEventListener('change', function () {
    alert(listBackground.value);
    body.style.backgroundImage = `url(.img/backgrounds/${listBackground.value})`;
});

