/**
 * Обо мне.
 */
function aboutMe() {
    let renderContainer = document.getElementById('renderContainer');    

    let h3 = document.createElement('h3');
    h3.innerText = 'Обо мне';

    let p = document.createElement('p');
    p.innerHTML = 'Стефанишин Орест Игоревич, 31год, Инженер-Строитель, БГТУ им. В.Г. Шухова, более 5 лет работал на позициях Инженера ПТО, Мастера СМР, производителя работ, в какой-то момент жизни решил изменить свои цели и приоритеты в сторону IT, поэтому пошел на курсы тестировщика ПО в школу Eduson Academy, закончил их, получил сертификат, на курсах приобрел hasd,soft skils, но не остановил процесс своего развития, сейчас более плотно изучаю верстку и JS для того, чтобы приобрести опыт и научится автотестированию с применением JS.';

    renderContainer.innerHTML = '';
    renderContainer.appendChild(h3);
    renderContainer.appendChild(p);
}

/**
 * Мои цели.
 */
function myGoals() {
    let renderContainer = document.getElementById('renderContainer');    

    let h3 = document.createElement('h3');
    h3.innerText = 'Мои цели';

    let p = document.createElement('p');
    p.innerText = 'Выйти за год на уровень Middle в тестировании, стать полноценным QA тестировщиком, писать автотесты на JS, знать на хорошем уровне английский язык.  ';

    let foto = document.createElement('div');
    foto.className = 'f';

    renderContainer.innerHTML = '';
    renderContainer.appendChild(h3);
    renderContainer.appendChild(p);
    renderContainer.appendChild(foto);

}

/**
 * Мои сертификаты.
 */
function mySertificates() {
    let renderContainer = document.getElementById('renderContainer');    

    let h3 = document.createElement('h3');
    h3.innerText = 'Сертификаты';

    let p1 = document.createElement('p');
    p1.innerText = 'Сертификат от эдисона';

    let sertificate1 = document.createElement('div');
    sertificate1.className = 'sert1';

    let p2 = document.createElement('p');
    p2.innerText = 'Сертификат от степика';

    let sertificate2 = document.createElement('div');
    sertificate2.className = 'sert2';

    renderContainer.innerHTML = '';
    renderContainer.appendChild(h3);
    renderContainer.appendChild(p1);
    renderContainer.appendChild(sertificate1);
    renderContainer.appendChild(p2);
    renderContainer.appendChild(sertificate2);
    }
// WWEEEEE.
aboutMe();

/**
 
 
const links = document.querySelectorAll('.share a');

function onClick(event) {
	event.preventDefault();

	window.open(
		event.currentTarget.href,
		'Поделиться',
		'width=600,height=500,location=no,menubar=no,toolbar=no'
	);
}

links.forEach((link) => {
	const url = encodeURIComponent(window.location.origin + window.location.pathname);
	const title = encodeURIComponent(document.title);

	link.href = link.href
		.replace('{url}', url)
		.replace('{title}', title);

	link.addEventListener('click', onClick);
});
*/