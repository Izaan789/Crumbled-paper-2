class Collider {
    constructor(x, y,height,angle) {
      var options = {
          
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
     
      World.add(world, this.body);
      
    }

    display(){
        
      rectMode(CENTER);
      rect(this.body.position.x,  this.body.position.y,20,120);
  }
}