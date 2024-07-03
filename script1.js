//1//written a program to respresent Movie class
class Movie{
  constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getPG(){
    let temp=[]
    if(this.rating=="PG"){
      temp.push(this.rating)
    }
    return temp;
  }
  moviedetails(){
      console.log("The Title of the Movie is:"+this.title);
      console.log("The Studio name is:"+ this.studio); 
      console.log("The Rating of this Movie is:"+this.rating);
    }   
}
var c1=new Movie("Vikram","RKFI","PG");
var c2=new Movie("Indian-2","Red Giant Movies","PG");
var c3=new Movie("Casino Royale","Eon Productions","PG13");
console.log("Movie details are:");
c3.moviedetails();