// SIMPLE METHOD
function main(coins, total){
  let n = coins.length;

  // Build matrix
  let dp = Array(n+1).fill([]);
  dp = dp.map(el => el = Array(total + 1).fill(0))
  dp[0] = dp[0].map((el,i) => el = i);

  for(let i = 1; i < n +1 ; i++){
    const coin = coins[i-1];

    for(let j= 1; j < total+1; j++){
      const mod = j % coin;

      if(mod === 0){ // minimum you can do with it are the modulus
       	dp[i][j] =  dp[0][j] / coin;
      }else{ // minimum you can do with it is the modulus + the minumum until
        const floor = Math.floor(j/coin);
				const leftIndex = j - coin ;
        const compare = [];

        compare.push(dp[i-1][j]);

        if(leftIndex > -1) compare.push(Math.floor(j/coin) + dp[i][mod]);

        dp[i][j] = Math.min(...compare);

      }

    }
  }

  //return dp[n][total];
  return dp;
}

main([1,3,4],6); // IT WORKS
main([1,5,6,8],15); // IT FKN WORKS

// MEMORY IMPROVED

function betterMain(Coins, total){
  const n = Coins.length;
  const dp = Array(total + 1).fill(Number.MAX_SAFE_INTEGER)

  dp[0] = 0;

  for(let i = 1; i < n+1; i++){
   	for(let j = Coins[i-1]; j < total+1; j++){
     	dp[j] = Math.min(dp[j-Coins[i-1]]+1, dp[j]);
    }
  }

  return dp[dp.length-1];
}
