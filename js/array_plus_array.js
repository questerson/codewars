function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, curVal) => acc + curVal, 0) + arr2.reduce((acc, curVal) => acc + curVal, 0 )
  }