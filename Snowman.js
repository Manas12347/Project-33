class Snowman{
    constructor(x, y, width, height) {
        var options = {
            'restitution':2.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snowman.png");
      
       
        World.add(world, this.body);
      }
      display(){
       
    
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
     
}





