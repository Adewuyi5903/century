function century(year) {
    let century = Math.floor(year / 100);
    if(year % 100 !==0){
        century ++;
    }
    return century;
  }


  console.log(century(1705));
  console.log(century(1900));
  console.log(century(1601));
  console.log(century(2000))