const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "nur";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("koneksi gagal");
  }

  //pilih database
  const db = client.db(dbName);
  //menambahkan 1 data ke collections mahasiswa

  // db.collection("user").insertOne({
  //   nama: "Putri2",
  //   email: "putri2@gmail.com",
  // });
  // (error, result) => {
  //   if (error) {
  //     return console.log("gagal menambahkan data");
  //   }
  //   console.log(result);
  // };

  //menambahkan lebih darinsatu data
  // db.collection("user").insertMany([
  //   {
  //     nama: "putri",
  //     email: "putri3@gmail.com",
  //   },
  //   {
  //     nama: "Ryz",
  //     email: "ryzphp@gmail.com",
  //   },
  // ]);
  // (error, result) => {
  //   if (error) {
  //     return console.log("tambah data gagal");
  //   }
  //   console.log(result);
  // };

  //menampilkan semua data yanga ada di collection/tabel user
  // console.log(
  //   db
  //     .collection("user")
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // menampilkan data berdasarkan kriteria
  // console.log(
  //   db
  //     .collection("user")
  //     .find({ nama: "putri" })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );
  // console.log(
  //   db
  //     .collection("user")
  //     .find({ _id: ObjectId("64c14527757ad3360c4ce75c") })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  //mengubah satu data berdsrakan id // mengganti banyak gunakan updateMany
  // db.collection("user").updateOne(
  //   {
  //     _id: ObjectId("64c14527757ad3360c4ce75c"),
  //   },
  //   {
  //     $set: {
  //       nama: "ryzedit2",
  //       email: "email.edit@gmail.com",
  //     },
  //   }
  // );

  // //menghapus 1 data
  // db.collection("user")
  //   .deleteOne({
  //     _id: ObjectId("64c14527757ad3360c4ce75c"),
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //menghapus lebih 1 data
  db.collection("user")
    .deleteMany({
      nama: "putri",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
