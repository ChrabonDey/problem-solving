function borderAddTheGame(picture){
    let wall="#".repeat(picture[0].length+2)
    picture.unshift(wall)
    picture.push(wall)
    
    for(let i=1;i<picture.length-1;i++){
        picture[i]="#".concat(picture[i],"#");

    }
    return picture
}

// console.log(borderAddTheGame(["abc","def"]))

 const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

for(let i of winPatterns){
   const[a,b,c]=i
   
}