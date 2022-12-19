import { daoCreateItem, daoGetItem } from "../dao/index.js";


export const getItems = async (req, res) => {
  try {

    const a = await daoGetItem()
    console.log(a);
    res.header('Content-Type', 'application/json; charset=utf-8').code(201).send(a)
    // return a
  } catch (error) {
    console.log(error);
  }
}

export const createItem = async (req, res) => {
  try {
    const a = await daoCreateItem()
    console.log(a);
    res.header('Content-Type', 'application/json; charset=utf-8').code(201).send(a)
    // return a
  } catch (error) {
    console.error(error);
    res.header('Content-Type', 'application/json; charset=utf-8').code(500).send(error)
  }
}