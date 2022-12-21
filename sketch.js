const width = 400;
const height = 600;

class Map{
  
  constructor(width,height){
    this.width = width;
    this.heigth = height;
  }
  
  init(){
    createCanvas(this.width,this.heigth);
  }
}

class Level{
  
  setLevel(){
    
  }
  
  getCurrentLevel(){
    
  }
}

class Entity{
  
  attack(){
    
  }
  
  moveRight(){
    
  }
  
  moveLeft(){
    
  }
  
  moveDown(){
    
  }
  
  moveUp(){
    
  }
}

class Monster extends Entity{
  
  moveRandom(){
    
  }
  
  saveScore(){
    
  }
}

class Hero extends Entity{
  
  increaseScore(){
    
  }
  
  calculateLife(){
    
  }
  
  saveScore(){
    
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
