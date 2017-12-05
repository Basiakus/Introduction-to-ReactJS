var element = React.createElement('div', {}, 'Witaj pierwsza react-cio!');
ReactDOM.render(element, document.getElementById('reactApp'));

var moveElement =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, "I Origins"),
				React.createElement('p', {}, "hmm...najlepiej obejrzeć")
			),
			React.createElement('li', {},
				React.createElement('h2', {}, "Adams æbler"),
				React.createElement('p', {}, "patrz wyżej")
			)
		)
	);
ReactDOM.render(moveElement, document.getElementById('movieList'));

var games = [{
		id: 1,
		title: 'Metal Gear Solid',
		publisher: 'Konami',
		platform: 'Playstation',
		img: "./images/mgs.png"
	},
	{
		id: 2,
		title: 'Gran Turismo',
		publisher: 'Poliphony Digital',
		platform: 'Playstation',
		img: "./images/gt.jpg"
	},
	{
		id: 3,
		title: 'Diablo',
		publisher: 'Blizzard',
		platform: 'PC',
		img: "./images/diablo.jpg"
	}
];

var gamesListMap = games.map(function(game) {
	return React.createElement('li', {
			key: game.id
		},
		React.createElement('h3', {}, game.title),
		React.createElement('img', {
			src: game.img
		}),
		React.createElement('p', {}, game.publisher),
		React.createElement('p', {}, game.platform),
	);
});

var gamesElement =
	React.createElement('div', {},
		React.createElement('h2', {}, 'Lista top 3 games series'),
		React.createElement('ul', {}, gamesListMap)
	);

ReactDOM.render(gamesElement, document.getElementById('gameList'));