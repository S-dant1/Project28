class Ground{
    constructor(x, y){


    var options_b= {
        isStatic: true


    }
       this.body = Bodies. rectangle(x, y, width, height, options_b);
       this.width = 1200;
       this.height = 20;
       World.add(world, this.body);



    }
display(){

    var pos = this.body.position;
    push ();

    fill("brown");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);

    pop ();
}


}