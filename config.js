const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://thomasmehari2721:nL5yvbVngLeo1Ukh@books-store-mern.oikhe.mongodb.net/?retryWrites=true&w=majority&appName=Books-store"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
