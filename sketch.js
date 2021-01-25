//STEP 1
//Whenever you create a sprite which needs a image you need two variables
//One for the sprite itself
// Another for the sprite image I am writing one example for each comment

var garden,gardeImage;
//STEP 2
//Kindly check the action video we have 3 animations for the cat.. and 4 images are given
//The cat is originally sitting next an animation in which it is walking.Finally,after touching Jerry.
//Similarly, for Jerry there are 3 Animations..
//Intially its carrying the cheese
//Once cat starts walking its animation is changed to mouse2.png annd mouse3.png together.
//Finally mouse3.png when cat touches the mouse
var cat,catAni1,catAni2,catAni3; // One variable for cat sprite itself remaining for images
//similarly do it for Jerry

function preload() {
    //STEP 3
    //load the images here
    // All the images are placed inside the folder named images so while preloading you have to give a proper path
    gardenImage = loadImage("/images/garden.png");

    catAni1 = loadAnimation("/images/cat1.png");
    catAni2 = loadAnimation("/images/cat2.png","/images/cat3.png");
    catAni3 = loadAnimation("/images/cat4.png");

    //similarly load all images for Jerry also
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //STEP 4
    garden = createSprite(500,400)// You should locate the centre of the canvas x= width/2 and y =height/2 
    garden.addImage("Garden",gardenImage);

    cat = createSprite(870,600)// placing it a little lower in our screen
    //Now add all Animations which cat sprite will get in our code but the first added
    //Animation is going to become the intial animation for the sprite
    cat.addAnimation("Cat1Animation",catAni1);
    cat.addAnimation("Cat2Animation",catAni2);
    cat.addAnimation("Cat3Animation",catAni3);
    cat.scale = 0.2;
    
    jerry = createSprite(100,600);
    //Add all animations you will use in future for jerry


}

function draw() {
   
    background(255);
    //STEP 6
    //Write condition here to evalute if tom and jerry collide
    //if(condition to check collision from the left side of jerry)
    { 
        //Make cat stop
        //Change the image for cat
        //Change the image for jerry.
     
    } 

    //STEP 7 Kindly remove all my comments 

    drawSprites();
}


function keyPressed(){

    //STEP 5

  //For moving and changing animation write code here
  //You have to detect key even left key pressed
  
  if(keyCode === LEFT_ARROW){
    
        //Give velocity to cat so that it starts moving towards Jerry
        //Use instruction cat.changeAnimetion("Cat2Animation");"This is where we use label
        // which we gave while adding the animation to the sprite in setup()"
        /*V.V.V. Important when you change Animation you have to give the exact name of the label
        you used while adding the animation to the sprite*/
        //Change Animation for Jerry to
  }


}
