const { Router } = require("express");
const { sequelize } = require("../models");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;

const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const artwork = await Artwork.findAll();
    console.log(artwork);
    res.send(artwork);
  } catch (e) {
    console.log(e);
  }
});
router.get("/artworks/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const artWork = await Artwork.findByPk(id, { include: [Bid] });
    console.log(artWork);
    res.send(artWork);
  } catch (e) {
    console.log(e);
  }
});
router.put("/artworks/:id", async (req, res, next) => {
  const artWork = await Artwork.findByPk(req.params.id);
  console.log(req.body.hearts);

  await artWork.update(req.body);

  //   res.status(200).send({ artWork });
});

module.exports = router;
