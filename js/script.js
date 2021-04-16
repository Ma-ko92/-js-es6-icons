$(document).ready(function() {
	// Array di oggetti con le proprietà delle icone, importato dall'esterno.
	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	// Array con elementi , importato dall'esterno, con elementi guida per assegnazione
	// dei colori per le icone.
	const colors = [
		'blue',
		'orange',
		'purple'
	];

	// Salvo in una costante l'elemento del html che mi occorre per popolarlo di icone.
	const iconsContainer = $("#icon_container");
	
	// / * ---------- Function Call --------- * / //
	printIcons(icons, iconsContainer);





	// / * ---------- Function ---------- * / //

	// Funzione che tampa le icone su pagina HTML.
	// 
	// iconsArray ==> è l'array di oggetti che contiene le icone.
	// container ==> è l'oggetto jQuery con il container che racchiude ogni singola icona sull'HTML.
	function printIcons(iconsArray, container) {
		// Ciclo l'array delle icone con "ForEach".
		iconsArray.forEach((element) => {
			// Inizio destrutturando element per leggere le informazioni di ogni singolo oggetto.
			const {name, prefix, family} = element;
			// Salvo in una costante il backtick che verrà stamapato in pagina HTML.
			// Con la destrutturazione fatta in precedenza, sostituisco gli elementi della classe 
			// presenti, con ogni elemento dell'oggetto delle icone.
			const iconElementHtml = `
				<div id="icon_container" class="icon"> 
					<i class="${family} ${prefix}${name}"></i>
					<div>
						${name.toUpperCase()}
					</div>
				</div>
			`;
			// Con questa funzione "appenderò" ogni singolo elemento dell'ogeeto icons e le inserirò
			// nel suo container nella pagina HTML.
			container.append(iconElementHtml);
		});
	}


	// Milestone 1
	// Partendo dalla seguente struttura dati , 
	// mostriamo in pagina tutte le icone disponibili come da layout.

	// Milestone 2
	// Coloriamo le icone per tipo

	// Milestone 3
	// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

});