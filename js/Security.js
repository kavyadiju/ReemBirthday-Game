class Security {

    constructor(){
        this.access1 = createInput("").attribute("placeholder", "Enter the day");
        this.access1.position(700,330);
        this.access1.style('background', 'white');  1
        this.button1 = createButton('Check');
        this.button1.position(750,350);
        this.button1.style('background', 'lightgrey');
        
    }

    display(){

    this.button1.mousePressed(() => {
    if(system.authenticate(accessCode1,this.access1.value())){
        this.button1.hide();
        this.access1.hide();
        score++;
    }
    else {
        if(system.authenticate(accessCode2,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    }
});


    }
}
