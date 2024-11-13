async function fetch

data = data.response.body..item;

const 
for (let datum of data) {
  const stationName = datm.stationName;
  objectData[stationName] = datum;
}
console.log(objectData['광진구']);
console.log(objectData['관악구']);
console.log(objectData['성동구']);
//{stationName : object}
