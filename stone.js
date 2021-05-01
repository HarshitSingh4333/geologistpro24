class stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
      var options ={
		  restitutions:0.8,
		  density:12,
		  friction:0.9,
	  }

		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width , this.height , options)
		World.add(world, this.body);
	

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
             rect(0,0,this.width,this.height);
			pop()
	}

}