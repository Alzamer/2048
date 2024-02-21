function getRandomPoint(){
  return {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)}
}

export default function addRandomPoint(grid: Array<Array<number>>){
  let { x, y } = getRandomPoint();
  
  while(grid[x][y] !== 0){
    const point = getRandomPoint();
    x = point.x;
    y = point.y; 
  }

  grid[x][y] = 2;
}