const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a)
console.log("O primeiro ator/a do elenco é:", filme.elenco[0])
//b
console.log("O ultimo ator/a do elenco é:", filme.elenco[3])
//c
console.log("Todas as transmisoes de Hoje sao:", filme.transmissoesHoje)
//d
console.log(filme.transmissoesHoje[1].horario)