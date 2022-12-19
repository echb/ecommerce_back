import { daoGetUser, daoCreateUser } from "../dao/index.js";


export const getUser = async (req, res) => {
  try {

    const a = await daoGetUser()
    console.log(a);
    res.header('Content-Type', 'application/json; charset=utf-8').code(201).send(a)
    // return a
  } catch (error) {
    console.log(error);
  }
}

export const createUser = async (req, res) => {
  try {
    const a = await daoCreateUser()
    console.log(a);
    res.header('Content-Type', 'application/json; charset=utf-8').code(201).send(a)
    // return a
  } catch (error) {
    console.error(error);
    res.header('Content-Type', 'application/json; charset=utf-8').code(500).send(error)
  }
}