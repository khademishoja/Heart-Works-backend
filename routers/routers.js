const { Router } = require("express");
const { sequelize } = require("../models");
const Artwork = require("../models").artwork;
const Bid = require("../models").bid;
const authMiddleWare = require("../auth/middleware");
const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const artwork = await Artwork.findAll();
    console.log(artwork);
    res.send(artwork);
  } catch (e) {
    console.log(e);
    next(e);
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
    next(e);
  }
});
router.put("/artworks/:id", async (req, res, next) => {
  try {
    const artWork = await Artwork.findByPk(req.params.id);
    console.log(req.body.hearts);
    await artWork.update(req.body);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.post("/bids", async (req, res, next) => {
  try {
    console.log(req.body);
    const newBid = req.body;
    const artWork = await Artwork.findByPk(newBid.artworkId, {
      include: [Bid],
    });

    if (artWork.bids.length === 0) {
      console.log(artWork.minimumBid);
      if (newBid.amount === 0 || artWork.minimumBid >= newBid.amount) {
        return res.status(404).send({
          message: ` The minimum value of the input for amount is higher minimum bid is.`,
        });
      }
    }
    const amounts = artWork.bids.map((bid) => {
      return bid.amount;
    });
    const maxAmount = Math.max(...amounts);
    if (maxAmount >= newBid.amount)
      return res.status(404).send({
        message: `you have to enter more than ${maxAmount}`,
      });

    const bid = await Bid.create(newBid);
    res.send(bid);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.post("/artworks", async (req, res, next) => {
  try {
    console.log(req.body);
    const newArtwork = req.body;
    const createArtWork = await Artwork.create(newArtwork);
    res.send(createArtWork);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
module.exports = router;
