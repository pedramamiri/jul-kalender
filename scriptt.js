$(document).ready(function(){
    for (i=1; i<25; i++){
        $(".container").append("<div class='dag'>"+ i +"</div>")
    }
    var t = new Date(); 
    var day = t.getDate();
    console.log(day);
    $(".dag").click(function(){
        var index = Number($(this).text());
        if ( index == day ){
            fetch ("https://quotes.stormconsultancy.co.uk/random.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(text) {
                console.log(text);
                
                alert(text.author +":"+text.quote);
            });

        }
        else{
            alert("fel datum");
            

        }


    });


});