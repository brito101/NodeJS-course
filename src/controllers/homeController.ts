import { Request, Response } from "express"

import { Product } from "../models/Product"
import User from "../models/User"

export const home = async (req: Request, res: Response) => {
  let users = await User.find({}).sort({ email: 1 })
  //   let users = await User.findOne({
  //     email: "rodrigobrito101@hotmail.com",
  //   })
  //   let users = await User.findById("62b3b28fbd1cb71e956b5f28")
  //   let users = await User.find({
  //     "name.firstName": "Rodrigo",
  //   })

  console.log(users)

  let age: number = 90
  let showOld: boolean = false

  if (age > 50) {
    showOld = true
  }

  let list = Product.getAll()
  let expensiveList = Product.getFromPriceAfter(12)

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  })
}
