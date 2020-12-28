class Mango{

    constructor(x, y, r){

        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.r = r;
        this.body = Bodies.circle(x,y, this.r/2, options);
        this.image = loadImage("Plucking_mangoes/mango.png");
        World.add(world, this.body);
    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.r, this.r); 
    }

}