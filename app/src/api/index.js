const express = require("express");
const router = express.Router();
const challenges = require("./challenges");

/**
 * @swagger
 * /ping:
 *   get:
 *     responses:
 *       200:
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *           application/json:
 *             schema:
 *               type: string
 *           text/json:
 *             schema:
 *               type: string
 */
router.get("/ping", (req, res) => {
  res.send({
    result: "pong"
  })
})

/**
 * @swagger
 * /challenge-1:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items: 
 *               type: integer
 *     responses:
 *       200:
 *         content:
 *           text/plain:
 *             schema:
 *               type: boolean
 *           application/json:
 *             schema:
 *               type: boolean
 *           text/json:
 *             schema:
 *               type: boolean
 */
router.post("/challenge-1", (req, res) => {
  const result = challenges.challenge1(req.body);

  res.json(result);
})


/**
 * @swagger
 * /challenge-2:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items: 
 *               type: integer
 *     responses:
 *       200:
 *         content:
 *           text/plain:
 *             schema:
 *               type: array
 *               items: 
 *                 type: integer
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 type: integer
 *           text/json:
 *             schema:
 *               type: array
 *               items: 
 *                 type: integer
 */
router.post("/challenge-2", (req, res) => {
  const result = challenges.challenge2(req.body);

  res.json(result);
})


/**
 * @swagger
 * /challenge-3:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items: 
 *               type: integer
 *     responses:
 *       200:
 *         content:
 *           text/plain:
 *             schema:
 *               type: integer
 *           application/json:
 *             schema:
 *               type: integer
 *           text/json:
 *             schema:
 *               type: integer
 */
router.post("/challenge-3", (req, res) => {
  const result = challenges.challenge3(req.body);

  res.json(result);
})

module.exports = router;
