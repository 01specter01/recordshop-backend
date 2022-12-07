import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("../data/db.json"));

export const getAllUser = async (req, res) => {
    await db.read();
    res.json(db);
};

export const getUser = async (req, res) => {
    await db.read();
};
