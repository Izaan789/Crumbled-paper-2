class Dustbin {
    constructor(x, y,height,angle) {
      var options = {
          
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
     
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
    }

    display(){
      imageMode(CENTER);
      image(this.image, this.body.position.x,  this.body.position.y,140,140);
  }
}