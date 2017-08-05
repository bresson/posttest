const Data = require("./../data/Data");

// function setItems() {
//   Data.create(
//     {
//       title: "Now",
//       subtitle: "Realtime global deployments",
//       seller: "Zeit"
//     },
//     (err, data) => {
//       if (err) {
//         console.error(err);
//         throw err;
//       }
//       console.log(data);
//     }
//   );
// }

function find() {
  return Data.find({}, (err, doc) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("Finding docs: ", doc);
  });
}

async function findItems() {
  // setItems();
  const data = await find();
  return data;
}

module.exports = { findItems };
