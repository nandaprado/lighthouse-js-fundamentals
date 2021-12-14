const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
]

//good stations have at least 20 capacity
// stations can be SCHOOLS or COMMUNITY CENTRES

function chooseStations (stations){
  const goodStations = [];
  for (const station of stations){
    if ((station[2] === 'school' || station[2] === 'community centre') && station[1] >= 20 ){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}
console.log(chooseStations(stations));