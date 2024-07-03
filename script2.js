//2//written a class circle
class circle{
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
        }
        getradius(){
        return this.radius;
        }
        setradius(r){
          this.radius=r;
        }
        getcolor(){
          return this.color;
        }
        setcolor(color){
          this.color=color;
        }
        toString(){
          return `Circle[radius=${this.radius},color=${this.color}]`;
        }
        getArea() {
          return Math.PI * Math.pow(this.radius, 2);
        }
        getCircumference(){
          return 2 * Math.PI * this.radius;
        }
          
    }
    var c1 = new circle(1.0,"red");
    console.log(c1.toString());
    var area = c1.getArea();
    var circumference=c1.getCircumference();
    console.log(`Area of the circle is${area.toFixed(3)}`);
    console.log(`Circumference of the circle is${circumference.toFixed(3)}`);

