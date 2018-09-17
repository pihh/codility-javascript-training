/**
 *
 *
*/

// has 2 direction switches

function solution(A){
  let maxPoints = 0;
  let routePoints = [];
  let routes = {

  }
  let direction = false;
  // get all new route points
  for(let i = 1; i < A.length; i++){
    const a = A[i-1];
    const b = A[i];
    const currentDirection = (a > b)? 'L' : 'R';

    if(direction !== currentDirection){
      direction = currentDirection;
      routes[i-1] = [i-1];
    }
  }
  // get all right routes

  // get all left routes

  // now -> from each point to other either: you keep the route or you change the route ( if diferent directions && has possibility)


}
