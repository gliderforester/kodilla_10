$(function () {

	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		var i = 0;
		for (i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	};

	//Klasa Column
	function Column(name) {
		var self = this;

		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('x');
			var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');
			$columnDelete.click(function () {
				self.removeColumn();
			});
			$columnAddCard.click(function () {
				self.addCard(new Card(prompt("Wpisz nazwę karty")));
			});
			// KONSTRUOWANIE ELEMENTU KOLUMNY
			$column.append($columnTitle)
				.append($columnDelete)
				.append($columnAddCard)
				.append($columnCardList);

			// ZWRACANIE STWORZONEJ  KOLUMNY
			return $column;
		}
	}

	// Metody dla klasy Column
	Column.prototype = {
		addCard: function (card) {
			this.$element.children('ul').append(card.$element);
		},
		removeColumn: function () {
			this.$element.remove();
		}
	};

	// Klasa Card
	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		// Tworzenie elementów karty
		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('x');

			// PRZYPIĘCIE ZDARZENIA
			$cardDelete.click(function () {
				self.removeCard();
			});

			// Konstruowanie karty
			$card.append($cardDelete)
				.append($cardDescription);
			return $card;
		}
	}
	// usuniecie karty
	Card.prototype = {
		removeCard: function () {
			this.$element.remove();
		}
	}

	// obiekt tablicy
	var board = {
		name: 'Tablica Kanban',
		addColumn: function (column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	//IMPLEMENTACJA SORTOWANIA I DRAG & DROP
	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	//ZDARZENIE PO KLIKNIECIU - DODANIE KOLUMNY
	$('.create-column')
		.click(function () {
			var name = prompt('Wpisz nazwę kolumny');
			var column = new Column(name);
			board.addColumn(column);
		});

	// TWORZENIE KOLUMN
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

	// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// TWORZENIE NOWYCH EGZEMPLARZY KART
	var card1 = new Card('Nowe zadanie');
	var card2 = new Card('Stworzyc tablice kanban');

	// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);


});
