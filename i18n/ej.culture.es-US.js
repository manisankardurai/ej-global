ej.addCulture( "es-US", {
	name: "es-US",
	englishName: "Spanish (United States)",
	nativeName: "Español (Estados Unidos)",
	language: "es",
	numberFormat: {
		pattern: ['-n'],
		groupSizes: [3,0],
		',': ',',
		'.': '.',
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,0],
			',': ',',
			'.': '.',
			symbol: '%'
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,0],
			',': ',',
			'.': '.',
			symbol: "$"
		}
	},
	calendars: {
		standard: {
			firstDay: 0,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
				namesShort: ["do","lu","ma","mi","ju","vi","sa"]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
			},
			patterns: {
				D: "dddd, MMMM dd, yyyy",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});