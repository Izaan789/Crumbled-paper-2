class Paper{

    constructor(x,y,radius ){

        var options={
            restitution:0.3
          }
          
         
          this.body = Bodies.circle(x, y,radius, options);
          this.radius = radius
          this.image = loadImage("sprites/paper.png");
          World.add(world,this.body)
          
        }


    display(){

        

        imageMode(CENTER);
        image(this.image, this.body.position.x,  this.body.position.y,50,50);
        
    }




}