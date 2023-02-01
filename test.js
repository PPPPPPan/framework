let obj = {
  other: 'pppp',
  get name(){
    return this.other
  },
  set name(val){
    this.other = val
  }
}

console.log(obj.other);
