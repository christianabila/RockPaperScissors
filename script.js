"use strict";

var selection;

function shuffle() {
    var ai = Math.floor(Math.random() * 3), play = ai === 0 ? "<img src='images/rock.png'>" : ai === 1 ? "<img src='images/paper.png'>" : "<img src='images/scissors.png'>";
    
    $("#" + 0).removeClass("selected");
    $("#" + 1).removeClass("selected");
    $("#" + 2).removeClass("selected");
    
    $("#" + ai).addClass("selected");
    
    if (ai === selection) {
        $("#result").html("Tie");
        $("#you").addClass("winner");
        $("#computer").addClass("winner");
    }
    
    else if (ai === 0) { //rock
        if (selection === 1)
        {
            indicateWinner(true);
        }
        
        else if (selection === 2)
        {
            indicateWinner(false);
        }
    }
    
    else if(ai == 1) //paper
    {
       if(selection == 0)
       {
            indicateWinner(false);
       }
        
        else if(selection == 2)
        {
            indicateWinner(true);
        }
    }
    
    else if(ai == 2)
    {
        if(selection == 1)
        {
            indicateWinner(false);
        }
        
        else if(selection == 0)
        {
            indicateWinner(true);
        }
    }
}

function stuff(arg1)
{
    selection = arg1;
    $('#btnPlay').removeAttr('disabled');
    $("#00").removeClass("selected");
    $("#11").removeClass("selected");
    $("#22").removeClass("selected");
}

function indicateWinner(you)
{
    $("#you").removeClass("winner");
    $("#computer").removeClass("winner");
    
    if(you)
        $("#you").addClass("winner");
    else
        $("#computer").addClass("winner");
}