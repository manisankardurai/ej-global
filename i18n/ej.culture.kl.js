ej.addCulture( "kl", {
	name: "kl",
	englishName: "Greenlandic",
	nativeName: "kalaallisut",
	language: "kl",
	numberFormat: {
		",": ".",
		".": ",",
		groupSizes: [3,0],
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			groupSizes: [3,0],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,0],
			",": ".",
			".": ",",
			symbol: "kr."
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],
				namesAbbr: ["sap.","at.","marl.","ping.","sis.","tall.","arf."],
				namesShort: ["sa","at","ma","pi","si","ta","ar"]
			},
			months: {
				names: ["januaari","februaari","marsi","apriili","maaji","juuni","juuli","aggusti","septembari","oktobari","novembari","decembari",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""]
			},
			monthsGenitive: {
				names: ["januaarip","februaarip","marsip","apriilip","maajip","juunip","juulip","aggustip","septembarip","oktobarip","novembarip","decembarip",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd-MM-yyyy",
				D: "MMMM d'.-at, 'yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "MMMM d'.-at, 'yyyy HH:mm",
				F: "MMMM d'.-at, 'yyyy HH:mm:ss",
				M: "MMMM d'.-at'"
			}
		}
	}
});
