const { Router } = require("express");
const { Pokemon, Tipo } = require("../db.js");
const { getPokemon, getPokemonID,getbd,} = require("../middlewares/middleware.js");

const router = Router();
router.get("/team", async (req, res) => {
  pokemonInfo = await getbd();
  console.log(pokemonInfo)
  

  res.json(pokemonInfo);

  

});
router.get("/", async (req, res) => {
  pokemonInfo = await getPokemon();
  if (!pokemonInfo.length) return res.json({ info: "No hay mas registros" });

  res.json(pokemonInfo);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonInfo = await getPokemonID(id);
  if (!pokemonInfo.id) return res.json({ info: "No se encontro el pokemon" });
  res.json(pokemonInfo);
});

router.post("/", async (req, res) => {
  let { name, life, hp, defense, speed, height, 
    weight, type ,url } = req.body;
  if (
    isNaN(life) ||
    isNaN(hp) ||
    isNaN(defense) ||
    isNaN(speed) ||
    isNaN(height) ||
    isNaN(weight)
  )
    return res.json({ info: "Alguno de los argumentos no es un numero" });

  if (!name) return res.json({ info: "El nombre es obligatorio" });

  const existe = await Pokemon.findOne({ where: { name: name } });
  if (existe) return res.json({ info: "El pokemon ya existe" });

  const pokemon = await Pokemon.create({
    name: name.toLowerCase(),
    life: Number(life),
    hp: Number(hp),
    defense: Number(defense),
    speed: Number(speed),
    height: Number(height),
    weight: Number(weight),
    types: type,
    url:url
  });


console.log(type)
  if (type) {
    await Tipo.create({ name: type });
  }
  res.json({ info: "Pokemon creado" });
});


module.exports = router;
