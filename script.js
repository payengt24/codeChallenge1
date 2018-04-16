console.log('js');

let generateCount = 0;

$(document).ready(readyNow);

function readyNow (){
    console.log('JQ working');
    $('.generateButton').on('click', generateClick)
}

//function for when Generate Button is clicked
function generateClick (){
    //variable for switching the color from yellow back to red
    let clicked= true;
    //have the generate count goes up 1 time once Generate button is clicked
    generateCount ++
    //appending the div tags , p tags , swap button, and delete button to the DOM
    $('body').append('<div><p>' + generateCount + '</p><button class = "swapButton">Swap Color</button><button class="deleteButton">Delete</button></div>')

    //switching color from back and forth between yellow to red once swap button is clicked
    $('.swapButton').on('click', function(){
        if (clicked){
            $(this).parent().css('background-color', 'yellow');
            clicked = false;
        }else{
            $(this).parent().css('background-color', 'rgb(255,0,0)');
            clicked = true;
        }
        
    });

    //deleting row
    $('.deleteButton').on('click', function (){
        $(this).parent().remove();
    })
}
