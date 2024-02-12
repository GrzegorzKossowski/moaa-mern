import fs from 'fs/promises'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import chalk from 'chalk'
import { connectDB } from './mongo/db.js'
import User from './models/user.model.js'
import Product from './models/product.model.js'
import bcrypt from 'bcryptjs';

dotenv.config()
connectDB()

const importDataFromJson = async (filename) => {
  return await fs.readFile(filename)
    .then(data => {
      return JSON.parse(data)
    })
    .catch(error => {
      console.log(error);
    })
}

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()

    let data
    // get users from json
    data = await importDataFromJson('./startData/users.json')

    data = data.map(user => ({
      ...user,
      password: bcrypt.hashSync("123456", 10)
    }))
    await User.insertMany(data)
    console.log(chalk.green('\nUsers Imported!'));

    data = await importDataFromJson('./startData/products.json')
    await Product.insertMany(data)
    console.log(chalk.green('Products Imported!'));

    console.log(chalk.bgGreenBright.black(' All Data Imported! \n'));
    process.exit();
  } catch (error) {
    console.error(chalk.bgRed.black(`${error}`));
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    // delete data from DB
    await User.deleteMany()

    console.log(chalk.bgGreenBright.black('Data Deleted Sucessfuly!'));
    process.exit();
  } catch (error) {
    console.error(chalk.bgRed.black(`${error}`));
    process.exit(1);
  }
}

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}