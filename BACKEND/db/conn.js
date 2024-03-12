const mongoose = require("mongoose")
const stringConn = "mongodb://kaianguthierry:2KLSNJIQnXnwx4FT@ac-oczpama-shard-00-00.ajfxp3b.mongodb.net:27017,ac-oczpama-shard-00-01.ajfxp3b.mongodb.net:27017,ac-oczpama-shard-00-02.ajfxp3b.mongodb.net:27017/?ssl=true&replicaSet=atlas-1aa34a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

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