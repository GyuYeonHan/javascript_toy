function solution(n) {
    var sieve = [...Array(n+1)].map((v) => true);
    sieve[0] = false;
    sieve[1] = false;
    
    for(var i=2; i<=Math.sqrt(n) ; i++) {
        if(sieve[i] === true) {
            for(var j=i+i ; j<=n ; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    var answer = sieve.filter((v) => v);
    
    return answer.length;
}

console.log(solution(5));