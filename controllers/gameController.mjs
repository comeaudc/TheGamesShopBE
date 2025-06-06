import Game from "../models/gameSchema.mjs";

let createGame = async (req, res) => {
  const newGame = await Game.insertOne(req.body);

  res.status(201).json(newGame);
};

let readGames = async (req, res) => {
  const allGames = await Game.find({});

  res.json(allGames);
};

let updatedGame = async (req, res) => {
  let updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json(updatedGame);
};

let deleteGame = async (req, res) => {
  let deletedGame = await Game.findByIdAndDelete(req.params.id);

  res.json(deletedGame);
};

let getOne = async (req, res) => {
  let getOne = await Game.findById(req.params.id);

  res.json(getOne);
};

export default { createGame, readGames, updatedGame, deleteGame, getOne };
