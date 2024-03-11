const mongoose = require("mongoose")

async function main(){

try {

    mongoose.set("strictQuery",true);

    await mongoose.connect(
        "mongodb+srv://kaianguthierry:2KLSNJIQnXnwx4FT@cluster0.ajfxp3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
    console.log("teu banco tá pegando papai!");
} catch (error) {
    console.log(`Erro: ${error}`);
}

}

module.exports = main


//2KLSNJIQnXnwx4FT