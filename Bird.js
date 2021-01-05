class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smk = loadImage("sprites/smoke.png")
    this.trj =[]
  }

  display() {
    
  
    super.display();

 if (this.body.position.x>200 && this.body.velocity.x>10) {
 var pos = [ this.body.position.x , this.body.position.y]
 this.trj.push(pos)
 }
for(var i=0;i<this.trj.length;i++){
image(this.smk,this.trj[i][0],this.trj[i][1]);

  
}


  }
}
