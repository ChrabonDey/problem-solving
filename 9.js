function romanToInt(s) {
    const l = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let current = l[s[i]];
        
        let next = l[s[i + 1]];
       console.log([current,next])

        if (next > current) {
            sum += next - current;
           i++;
          
        } else {
            sum += current;
        }
    }

    return sum;
}

console.log(romanToInt("IX")); 
