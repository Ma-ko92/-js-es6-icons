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

	// Salvo in una costante una funzione che aggiungerà il colore per ogni icona,
	// ad un nuovo array.
	// Come argomento passerò l'array originale degli oggetti con le icone e l'array
	// dei colori.
	const coloredArray = colorIcons(icons, colors);

	// Salvo in una costante elemento select della pagina HTML.
	const selectElement =$("#type");

	// Salvo in una costante la funzione che servirà a dare i vari tipi di elementi alla select.
	const iconsTypes = getIconsTypes(coloredArray);

	// Creo una funzione che "legga" opzione selezionata dall'utente e cambi gli lelementi stampati
	// in pagina per la pripria categoria.
	// Utilizzo una funzione normale in quanto avrò bisogno dell'opzione .this.
	selectElement.change(function() {
		// leggere il tipo di icona scelta dall'utente
		const selectedType = selectElement.val();

		// Ottenere un array con solo quelle del tipo scelto
		const filteredIcons = filterIconsByType(coloredArray, selectedType);

		// stampare le icone
		printIcons(filteredIcons, iconsContainer);
	});
	
	// / * ---------- Function Call --------- * / //
	printFilterOptions(iconsTypes, selectElement);
	printIcons(coloredArray, iconsContainer);






	// / * ---------- Function ---------- * / //

	// Funzione che tampa le icone su pagina HTML.
	// 
	// iconsArray ==> è l'array di oggetti che contiene le icone.
	// container ==> è l'oggetto jQuery con il container che racchiude ogni singola icona sull'HTML.
	// il return non riporta nulla!
	function printIcons(iconsArray, container) {
		// Per evitare che gli elementi vengano "appesi" ogni volta che si sceglie un
		// opzione della select, faccio in modo che la pagina si resetti ad ogni opzione.
		container.html(" ");
		// Ciclo l'array delle icone con "ForEach".
		iconsArray.forEach((element) => {
			// Inizio destrutturando element per leggere le informazioni di ogni singolo oggetto.
			const {name, prefix, family, color} = element;

			// Con ".toUpperCase" setto i nomi in maiuscolo.
			const nameUppercase = name.toUpperCase();

			// Salvo in una costante il backtick che verrà stamapato in pagina HTML.
			// Con la destrutturazione fatta in precedenza, sostituisco gli elementi della classe 
			// presenti, con ogni elemento dell'oggetto delle icone.
			
			const iconElementHtml = ` 
				<div id="icon_container" class="icon"> 
					<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
					<div>
						${nameUppercase}
					</div>
				</div>
			`;

			// Con questa funzione "appenderò" ogni singolo elemento dell'ogeeto icons e le inserirò
			// nel suo container nella pagina HTML.
			container.append(iconElementHtml);
		});
	}

	// Funzione che servirà a dare il colore a ogni icona in base all'array di coliri prefissato,
	// creando un nuovo array. 
	// 
	// originalIconsArray => è l'array originale, composto di oggetti che rappresenta le icone.
	// colorsArray => è l'array dei colori, che rappresenta un colore css.
	// return => Nuovo array con all'interno gli oggeti con le icone e il loro proprio colore.
	function colorIcons(originalIconsArray, colorsArray) {
		const iconTypes = getIconsTypes(originalIconsArray);

		// Uso la funzione ".map" per creare un nuovo array partendo da quello originale.
		const iconsWithColors = originalIconsArray.map((element) => {
			// Creo un oggetto copia per poter lavorare su una copia, dopodiche faccio lo 
			// spread su elemnt per popolarlo.
			const newIconObj = {
				...element
			};
			// uso idexOf per ottenere l'indice del tipo dall'array dei tipi.
			const iconTypeIndex = iconTypes.indexOf(newIconObj.type);

			// Agginungo il nuovo elemento colore con lo stesso indice del tipo.
			// Per evitare che non trovi l'indice imposto una condizione.
			if(iconTypeIndex != -1) {
				newIconObj.color = colorsArray[iconTypeIndex];
			}

			// ritorno in nuovo array con i colori.
			return newIconObj;
		});

		// Ritorno l'array con i colori.
		return iconsWithColors;
	}


	// Funzione che creerà un array con i tipi di icone.
	// 
	// icons array => array di oggetti che rappresenta un'icona.
	// return => array di stringhe con la quale ognuna è un tipo di icona senza duplicati.
	function getIconsTypes(iconsArray) {
		const typesArray = [];
		// Con un ciclo forEach scorro l'array , e applico una condizione che determina
		// se l'elemnto sia al suo interno che, se falsa, lo pushera nell array.
		iconsArray.forEach((element) => {
			const elementType = element.type;

			if( typesArray.includes(elementType) == false) {
				typesArray.push(elementType);
			}
		});

		// Ritorno l'array .
		return typesArray;
	}

	// Funzione che popolerà la select nel HTML, per filtrare le icone.
	// 
	// iconTypesArray => Array di stringhe il quale ogni stringa è un tipo di icone.
	// selectElement => oggetto jQuery che rappresenti la select a cui aggiungere le opzioni.
	// return non riporta nulla.
	function printFilterOptions(iconTypesArray, selectElement) {
		iconTypesArray.forEach((element) => {
			// In una costante salvo il backtick che stamperà sulla pagina html
			// le varie opzioni della select.
			// Nella value di option inserirò l'elemento che raggruppa le varie icone.
			// Darò lo stesso valore anche alla label, sempre con element.
			const newOption = `
			<option value="${element}">${element}</option>
			`;

			// "appendo" le varie opzioni nella select.
			selectElement.append(newOption);
		});
	}

	// Creo una funzione che filtri le icone per tipo.
	// 
	// iconsArray => array di oggetti che rappresenta un'icona.
	// type => è una stringa che rappresenta il tipo di icona da filtrare.
	// return => array di oggetti che rappresenta un'icona, filtrato per tipo.
	function filterIconsByType(iconsArray, type) {
		// con questa condizione, se l'elemento della select è vuoto, stampo
		// tutte le icone
		if(type.length == 0) {
			return iconsArray;
		}

		// con questa funzione filtro l'array di icone e ritorno le icone con il proprio
		// tipo selezionato.
		const filteredArray = iconsArray.filter((element) => {
			return element.type == type;
		});
		// ritorno l'array filtrato.
		return filteredArray;
	}

	// Milestone 1
	// Partendo dalla seguente struttura dati , 
	// mostriamo in pagina tutte le icone disponibili come da layout.

	// Milestone 2
	// Coloriamo le icone per tipo

	// Milestone 3
	// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

});