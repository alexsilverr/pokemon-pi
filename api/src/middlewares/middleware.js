const fetch = require("node-fetch");
const { Pokemon, Tipo } = require("../db.js");

const getPokemon = async () => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
  const data = await api.json();
  let base = data.results;
  return base;
};

const getPokemonName = async (name) => {
  try {
    const db = await Pokemon.findOne({
      where: {
        name: name,
      },
      include: Tipo,
    });
    if (db) {
      const pokemonDb = [
        {
          id: db.id,
          idPoke: db.idPoke,
          name: db.name,
          type: db.tipos.map((t) => t.name),
          img: "https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif",
        },
      ];
      return pokemonDb;
    } else {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await api.json();
      const pokemonName = [
        {
          id: data.id,
          name: data.name,
          type: data.types.map((t) => t.type.name),
          img: data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        },
      ];
      return pokemonName;
    }
  } catch (error) {
    return [];
  }
};

const getPokemonID = async (id) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await api.json();
    return data;
  } 
 catch (error) {
    return {};
  }
};
const getbd = async () => {
  try {
  
    const bd = await Pokemon.findAll({ include: Tipo });
    console.log('hola')
   console.log( bd )
    const poke = bd.map(res => {
      return {
        id: res.id,
        name: res.name,
        height: res.height,
        weight: res.weight,
        types: [res.types],
        img: res.url,
        stats: [{
          hp: res.hp,
          speed: res.speed,
          life: res.life,
          Defense:res.defense,
        }]
      };
    });
    return poke
    
  } catch (error) {
    return console.log(error)
  }
};

module.exports = {
  getPokemon,
  getPokemonName,
  getPokemonID,
  getbd
};
