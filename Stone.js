class Stone{
    constructor(x, y, r){
        var options = {
           // 'isStatic':false,
            'resitution':0,
            'friction':1,
            'density':1.2
        }

        this.r = r ;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("Plucking_mangoes/stone.png");
        World.add(world, this.body);
        


    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.r,this.r);
        pop();
    }



}