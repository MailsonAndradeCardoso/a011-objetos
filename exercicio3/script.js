//Exercicio

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a
const pokemon2 = {...pokemon1,
nome : "Squirtle",
tipo: "Agua"
}


//b
let ataque = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
    
}
pokemon1.ataques = []
pokemon1.ataques.push(ataque)

//c
pokemon2.ataques = [...pokemon1.ataques]

//d
pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100})

//e
pokemon2.ataques.push({nome: "Jato de Agua", dano: 40, precisao: 100, tipo: "Agua"})

//f
console.log(pokemon1)
console.log(pokemon2)
 