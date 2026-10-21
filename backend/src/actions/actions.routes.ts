import express from 'express';

const router = express.Router();

router.get("/", (req, res) => 
    res.json("Actions module is working")
);

export default router;