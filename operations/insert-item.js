const Data = require("./../data/Data");

async function setItems(setItem) {
  console.log(setItem);
  await Data.create(
    {
      title: setItem.title,
      subtitle: setItem.subtitle,
      seller: setItem.seller
    },
    (err, data) => {
      if (err) {
        console.error(err);
        throw err;
      }
      console.log(data);
    }
  );
}

module.exports = { setItems };
