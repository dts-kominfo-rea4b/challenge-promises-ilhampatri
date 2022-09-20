const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;
const promiseOutput = async (emosi) => {
var totalEmosi =0;
await promiseTheaterIXX().then((result) => {
  for (let index = 0; index < result.length; index++) {
    if (result[index].hasil == emosi) {
      totalEmosi += 1;
    }
  }
})

await promiseTheaterVGC().then((result) => {
  for (let index = 0; index < result.length; index++) {
    if (result[index].hasil == emosi) {
      totalEmosi += 1;
    }
  }
})
return totalEmosi;

}
  module.exports = {
  promiseOutput
};

