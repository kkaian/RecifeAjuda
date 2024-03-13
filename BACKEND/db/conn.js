const mongoose = require("mongoose")
const stringConn = process.env.DB_KEY

async function main(){

try {

    mongoose.set("strictQuery",true);

    await mongoose.connect(
        `${stringConn}`
        );
    console.log("Banco em funcionamento!");
} catch (error) {
    console.log(`Erro: ${error}`);
}

}

module.exports = main


//2KLSNJIQnXnwx4FT