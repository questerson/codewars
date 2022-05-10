function magNumber(info){
    [weapon, streets] = info
    const weapons={
      "PT92": 17,
      "M4A1" : 30,
      "M16A2" : 30,
      "PSG1":5,
    }
    if(3*streets<=weapons[weapon]) return 1
    else{
        let n=1;
        while(weapons[weapon]*n<streets*3) n++
        return n
    }
}