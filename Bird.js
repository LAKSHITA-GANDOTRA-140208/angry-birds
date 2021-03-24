class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trejectary=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
var position=[this.body.position.x,this.body.position.y]
this.trejectary.push(position)}

for(var i=0;i<this.trejectary.length;i++){
image (this.smokeImage,this.trejectary[i][0],this.trejectary[i][1])
}
  }
}
