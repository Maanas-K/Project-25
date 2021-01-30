class Paper{
  constructor(x,y,diameter){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }


    this.body= Bodies.circle (x,y,diameter,options);
    this.body.position.x=x;
    this.body.position.y=y;
    this.diameter=diameter;

    this.image = loadImage("paper.png");

    World.add(world,this.body);
}
display(){
   var angle=this.body.angle
   
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode (CORNER);
    image (this.image,0,0,this.diameter*1.2,this.diameter*1.2)
    pop ();
    
}

};