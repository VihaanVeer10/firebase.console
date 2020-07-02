class Form{
    constructor(){this.input = createInput("Name");
     this.button = createButton('Play');
      this.greet = createElement('h2');}


      hide(){ this.greet.hide(); 
        this.button.hide(); 
        this.input.hide(); }

    display(){
        var title = createElement("H2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton("Play");
        var greet = createElement("H3");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
    var name = input.value();
    playercount+=1;
    player.update(name);
    player.updateCount(playercount);
    greet.html("Hello!" +name);
    greet.position(130,160);
        })
    }
}