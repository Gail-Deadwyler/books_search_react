const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed =
{
    authors: ["Dean Koontz"],
    description: "If you don’t take this note to the police . . I will kill a lovely blond schoolteacher. . . . If you do . . . I will instead kill an elderly woman active in charity work. You have six hours to decide. The choice is yours. The typewritten note under his windshield seems like just a sick joke. But in less than twenty-four hours, Billy Wiles, an ordinary, hardworking guy, is about to see his life take on the speed of a nightmare.",
    image: "http://books.google.com/books/content?id=g9xn-B4C4nkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=g9xn-B4C4nkC&printsec=frontcover&dq=Velocity&hl=&cd=2&source=gbs_api",
    title: "Velocity",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });