const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); 

const uri = "mongodb+srv://Daniel:IsaacRivera2006911_@cluster0.6tj70hl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let db;

async function connectToMongo() {
    try {
        await client.connect();
        db = client.db("Proyecto_de_Software-DR");
        console.log("Conectado exitosamente a MongoDB!");
        return db;
    } catch (error) {
        console.error("Error conectando a MongoDB:", error);
        process.exit(1);
    }
}

function getDb() {
    if (!db) {
        throw new Error("La conexión a la base de datos aún no está establecida. Llama primero a connectToMongo().");
    }
    return db;
}

module.exports = {
    connectToMongo,
    getDb,
    ObjectId,
};
