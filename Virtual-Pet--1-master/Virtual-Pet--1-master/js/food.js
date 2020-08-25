class Food{
constructor(){
this.foodStock = 0;
this.img = loadImage("images/Milk.png");
}

















Updatefood(foodStock){
this.foodStock = foodStock;
}

debuctfood(){
this.foodStock-1;    
}

getFoodStock(){
    return this.foodStock;
  }
bedRoom(){
backGround(bedroom);
}
wcRoom(){
backGround(wc);
}
GarDen(){
backGround(garden);
}
currentTime = hour();


display(){
    var x = 80,y = 100;
imageMode(CENTER);


if(this.foodStock!=0){
for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
        x=80;
        y=y+50;
    }
     image(this.img,x,y,50,50);
     x= x+30;


     if(currentTime ==(feed+1)){
         update("playing");
        foodobject.GarDen();
        }
     else   if(currentTime ==(feed+2)){
        update("sleeping");
       foodobject.bedRoom();
       }
       else   if(currentTime >(feed+2) && currentTime<(feed+4)){
        update("bathing");
       foodobject.wcRoom();
       }
        else{
           update("hungry");
         foodobject.display();
        }
}  
}function update(state){
    database.ref(("/").update({
      gameState:state
    }))
  }

}




}