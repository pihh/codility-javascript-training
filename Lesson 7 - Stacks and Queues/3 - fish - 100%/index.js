function solution(A, B) {
  let length = A.length;
  let count = length;
  let stackOfDownstreamFishes = [];

  for (let i = 0; i < length; i++) {
      let fish = A[i];
      if(B[i] === 1) {
          stackOfDownstreamFishes.push(fish);
      } else {
        // Check all downstream fishes and pick a fight with them with a backward loop
          for( let j = stackOfDownstreamFishes.length; j >= 0; j--) {
              count --; // Since that when there is a fight a fish dies,

              let fighterFish = stackOfDownstreamFishes[j];

              if(fighterFish > fish) {
                  break;
              } else if(fighterFish < fish) {
                  // remove last fish on stacl
                  stackOfDownstreamFishes.pop();
              }
          }
      }
  }

  return count;
}