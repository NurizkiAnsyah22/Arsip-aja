const yargs = require("yargs");
const contacts = require("./contacts");

// yargs.command(
//   "add",
//   "menambahkan contact baru",
//   () => {},
//   (argv) => {
//     console.log(argv.nama);
//   }
// );
//bikin lebih komplek bikin parameter objeck
yargs
  .command({
    command: "add",
    describe: "menambahkan kontak baru",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "no Hp",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },
  })
  .demandCommand();

//menampilkan daftar semua nama dan no hp kontak
yargs.command({
  command: "list",
  describe: "menampilkan list kontak ",
  handler() {
    contacts.listContact();
  },
});

//menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "menampilkan detail kontak berdasarkan nama ",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

//menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "mengahapus detail kontak berdasarkan nama ",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
