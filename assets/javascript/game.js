$(document).ready(function()
{
    var Rndm = Math.floor(Math.random() * 101 + 19)
    // This Function will select a random number to be shown at the begining of the game; It will be a number between 19 and 120 
        $("#rndmNumber").text(Rndm)
    // THis selector will substitute the rndmNumber id that will be defined in the HTML
            var nr1= Math.floor(Math.random()*11+1)
            var nr2= Math.floor(Math.random()*11+1)
            var nr3= Math.floor(Math.random()*11+1)
            var nr4= Math.floor(Math.random()*11+1)
    // This variable are defined to randomise the crystal element number between 1 -12

    // Next I'll declare my counters and set it to 0;
            var wins = 0;
            var losses = 0;
            var usrTotal =0;

    //  Two selectors ;
        $("#nmbrWins").append(wins);
        $("#nmbrLosses").append(losses);

    // A reset function for the game;
    function reset()
    {
            Rndm = Math.floor(Math.random() * 101) + 19;
        $("#rndmNumber").text(Rndm);
            nr1= Math.floor(Math.random()*11)+1;
            nr2= Math.floor(Math.random()*11)+1;
            nr3= Math.floor(Math.random()*11)+1;
            nr4= Math.floor(Math.random()*11)+1;
            usrTotal = 0;
        $("#fnlTotal").text(usrTotal);
    }
    // This function will count up the losses;
    function losing()
        {
            alert( "You've lost at this time :( " )
            losses++;
            $("#nmbrLosses").text(losses);
            reset();
        }
    // THis function will add up the wins;
    function winning()
        {
            alert( "Great Job! You are the winner!")
            wins++;
            $("#nmbrWins").text(wins);
            reset();
        }
    //  I'll set upt the click buttons for the Crystals;
        $("#first").on('click', function()
    {
        usrTotal = usrTotal + nr1;
        console.log("New User Number is: " + usrTotal);
        $("#fnlTotal").text(usrTotal);
        // With the condition of usrTotal to be === to Rndm
        if(usrTotal===Rndm)
            {winning();}
        else if(usrTotal>Rndm)
            {losing();}
        
        
    })
        $("#second").on('click', function()
    {
        usrTotal = usrTotal + nr2;
        console.log("New User Number is: " + usrTotal);
        $("#fnlTotal").text(usrTotal);
        // With the condition of usrTotal to be === to Rndm
        if(usrTotal===Rndm)
            {winning();}
        else if(usrTotal>Rndm)
            {losing();}
        
    })
        $("#third").on('click', function()
    {
        usrTotal = usrTotal + nr3;
        console.log("New User Number is: " + usrTotal);
        $("#fnlTotal").text(usrTotal);
        // With the condition of usrTotal to be === to Rndm
        if(usrTotal===Rndm)
            {winning();}
        else if(usrTotal>Rndm)
            {losing();}
    })
        $("#fourth").on('click', function()
    {
        usrTotal = usrTotal + nr4;
        console.log("New User Number is: " + usrTotal);
        $("#fnlTotal").text(usrTotal);
        // With the condition of usrTotal to be === to Rndm
        if(usrTotal===Rndm)
            {winning();}
        else if(usrTotal>Rndm)
            {losing();}
    })


});
