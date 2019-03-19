module.exports = function getZerosCount(number, base) {
  // your implementation
  

function findPowerOfP(N, p){
  var count = 0;
  var r = p;
  while (r <= N){  
  count += Math.floor(N / r); 
  r = r * p ;
  }
  return count ;
    }
  
  function primeFactorsofB(B){ 
    
    
     var ans=[]; 
    
      for (let i = 2;; i++) {
        if(B==1) break;
          if (B % i == 0) { 
              var count = 0; 
              while (B % i == 0) { 
                  B = Math.floor(B / i); 
                  count++; 
              } 
    
              ans.push([i, count]); 
          } 
      } 
      return ans; 
  } 
   
  function largestPowerOfB(N, B){ 
  var vec = [] ;
  vec = primeFactorsofB(B) ;
  var ans1 ;
  var ansvect=[];
  for(let i=0;i<vec.length;i++){
    ansvect.push(Math.floor(findPowerOfP(N,vec[i][0])/vec[i][1]));
}
  
    ans1 = Math.min(...ansvect);
  return ans1; 
  }
    return largestPowerOfB(number,base); 
}