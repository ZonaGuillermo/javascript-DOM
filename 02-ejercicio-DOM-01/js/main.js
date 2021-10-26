// EJERCICIO 01 ***************************************************

const nameForm = document.getElementById('name-form');
const btnName = document.querySelector('.btn-name');
const ulName = document.querySelector('.list-name');

const surnameForm = document.getElementById('surname-form');
const btnSurname = document.querySelector('.btn-surname');
const ulSurname = document.querySelector('.list-surname');

const getName = () => {
	const li = document.createElement('li');
	li.innerHTML = nameForm.value;
	li.classList.add('fs-4');
	ulName.append(li);
	nameForm.value = '';
}


btnName.addEventListener('click', getName);

btnSurname.addEventListener('click', () =>{
	const li = document.createElement('li');
	li.innerHTML = surnameForm.value;
	li.classList.add('fs-4');
	ulSurname.append(li);
	surnameForm.value = '';
});



// EJERCICIO 02 ***************************************************

const conversorForm = document.querySelector('#conversor-form');
const btnConversor = document.querySelector('.btn-conversor');
const conversorScreen = document.querySelector('.conversor-screen');

const calculateConversion = () => {
	const dolarToEuros = conversorForm.value * 0.86;
	conversorScreen.innerHTML = `${conversorForm.value}$ son ${dolarToEuros}€`;

	conversorForm.value = '';
}


btnConversor.addEventListener('click', calculateConversion);




// EJERCICIO 03 ***************************************************

const image = document.querySelector('.image');

image.addEventListener('click', (event) => { 
	const src1 = 'https://loremflickr.com/400/200/flowers?lock=2';
	const src2 = 'https://loremflickr.com/400/200/flowers?lock=4';

	if (event.target.src === src1) {
		image.setAttribute('src', src2);
	} else {
		image.setAttribute('src', src1);
	}
 });




// EJERCICIO 04 ***************************************************
const locateTable = document.querySelector('.locate-table');

const createTable = document.createElement('table');

createTable.classList.add('table');
createTable.classList.add('table-light');

createTable.innerHTML =
`<thead>
	<tr>
		<th>Nombre</th>
		<th>Apellido</th>
		<th>Nota Examen</th>
		<th>Aprobado</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Ivan</td>
		<td>Luengo</td>
		<td>8</td>
		<td>true</td>
	</tr>
	<tr>
		<td>Jessica</td>
		<td>Hernández</td>
		<td>7</td>
		<td>false</td>
	</tr>
</body>
`


locateTable.append(createTable);





