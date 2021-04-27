// Build your stack class here.
class Stack {
  constructor(){
    this.array = []
    this.top = 0

  }

  push(el){
    this.array[this.top] = el
    this.top = this.top + 1
    console.log(this.array)
    return el
  }

  pop(){
     if(this.isEmpty()){
      return true
     }

     let last = this.array[this.top-1];  
     this.array.splice(-1)[0]
     this.top = this.top-1
     console.log(this.array);
     return last;
    
  }

  clear(){
   return this.array = []
  }

  isEmpty(){
    if (this.top === 0){
      return true
    }

    return false
  }






}

export default Stack;
