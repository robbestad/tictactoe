evalSquare=function(id){
    var txt,bg
    var square=$("#"+id).find("span").text();
    if(square == 'x'){bg='FFFFB7'}
    else if(square == 'o'){bg='FFFFB7'}
    else if('' == square) {txt='';bg='8B9906'}
    
    $("#"+id).find("span").text( txt);
    $("#"+id).css({backgroundColor: '#'+bg, border: '1px solid #350C1F'})  
}

isSquarevalid=function(id){
    if($("#"+id).find("span").text() == '') {return true} else {return false}
}

evalOut=function(id){
    var txt=false
    var square=$("#"+id).find("span").text();
    if(square == 'x'){}
    else if(square == 'o'){}
    else if('' == square) {txt=true}
    
    if(txt)$("#"+id).find("span").text();
    $("#"+id).css({backgroundColor: '#FFFFB7', border: '1px solid #350C1F'})  
   }
     
isNewGame=function(){
     var square='',i=0,status=true
     $(".squares").each(function() {
        square=$("#"+this.id).html();
        if(square!='') status=false;
     })
     return status
 }
 
clearBoard=function(){
     $(".squares").each(function() {
       $("#"+this.id).find("span").text('');   
     })
}

checkWinner=function(){
    var vfirstRow=$("#sq1").find("span").text()+$("#sq2").find("span").text()+$("#sq3").find("span").text();   
    var vsecondRow=$("#sq4").find("span").text()+$("#sq5").find("span").text()+$("#sq6").find("span").text();   
    var vthirdRow=$("#sq7").find("span").text()+$("#sq8").find("span").text()+$("#sq9").find("span").text();   
    var hfirstRow=$("#sq1").find("span").text()+$("#sq4").find("span").text()+$("#sq7").find("span").text();   
    var hsecondRow=$("#sq2").find("span").text()+$("#sq5").find("span").text()+$("#sq8").find("span").text();   
    var hthirdRow=$("#sq3").find("span").text()+$("#sq6").find("span").text()+$("#sq9").find("span").text();   
    var xfirstRow=$("#sq1").find("span").text()+$("#sq5").find("span").text()+$("#sq9").find("span").text();   
    var xsecondRow=$("#sq3").find("span").text()+$("#sq5").find("span").text()+$("#sq7").find("span").text();   
    
    
    /*
     HENRYS
     var playervinnertekst='siden du vant kan du hjelpe meg med star wars the force undlachad 2 jeg er kommet til darth vader!';
     var botvinnertekst='du boma du boma du har heste b&aelig;rsj i loma!';
    */
    
    var playervinnertekst='Gratulerer - DU VANT!';
    var botvinnertekst='Jeg vant - pr'+unescape('%F8')+'v igjen!';
    if("ooo"==vfirstRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==vsecondRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==vthirdRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==hfirstRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==hsecondRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==hthirdRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==xfirstRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("ooo"==xsecondRow) {$.msgbox(playervinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    
    if("xxx"==vfirstRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==vsecondRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==vthirdRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==hfirstRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==hsecondRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==hthirdRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==xfirstRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
    if("xxx"==xsecondRow) {$.msgbox(botvinnertekst, {}, function(buttonPressed) {clearBoard();  }); return false;}
                                                                                               
    if(9==vfirstRow.length+vsecondRow.length+vthirdRow.length) {$.msgbox('Ingen vinnere. pr'+unescape('%F8')+'v igjen! :)', {}, function(buttonPressed) {clearBoard();  }); return false;}
                   
    
    
} 
 
botMakemove=function(){     
    var square,i=0
    
    // Sjekker hvert kryss for HTML-kode og ser da om det er spilt noe her
    var validSquare=new Array
    $(".squares").each(function() {
      // Hvis kryss er tomt, angi som gyldig trekk
      if(''==$("#"+this.id).find("span").text()) validSquare.push(this.id)
        i++
     })        

     // Analyser best move
     var vfirstRow=$("#sq1").find("span").text()+$("#sq2").find("span").text()+$("#sq3").find("span").text();   
     var vsecondRow=$("#sq4").find("span").text()+$("#sq5").find("span").text()+$("#sq6").find("span").text();   
     var vthirdRow=$("#sq7").find("span").text()+$("#sq8").find("span").text()+$("#sq9").find("span").text();   
     var hfirstRow=$("#sq1").find("span").text()+$("#sq4").find("span").text()+$("#sq7").find("span").text();   
     var hsecondRow=$("#sq2").find("span").text()+$("#sq5").find("span").text()+$("#sq8").find("span").text();   
     var hthirdRow=$("#sq3").find("span").text()+$("#sq6").find("span").text()+$("#sq9").find("span").text();   
     var xfirstRow=$("#sq1").find("span").text()+$("#sq5").find("span").text()+$("#sq9").find("span").text();   
     var xsecondRow=$("#sq3").find("span").text()+$("#sq5").find("span").text()+$("#sq7").find("span").text();   
     
     // SJEKK FOR SPILLERVINNNERKOMBINASJONER
     if("oo"==vfirstRow) {
         $("#sq1").find("span").text()+$("#sq2").find("span").text()+$("#sq3").find("span").text();   
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq2").find("span").text()){$("#sq2").find("span").text('x'); return true}
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
     }
     else if("oo"==vsecondRow) {
         if(''==$("#sq4").find("span").text()){$("#sq4").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq6").find("span").text()){$("#sq6").find("span").text('x'); return true}
     }
     else if("oo"==vthirdRow) {
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
         if(''==$("#sq8").find("span").text()){$("#sq8").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("oo"==hfirstRow) {
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq4").find("span").text()){$("#sq4").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
     }
     else if("oo"==hsecondRow) {
         if(''==$("#sq2").find("span").text()){$("#sq2").find("span").text('x'); return true}
         if(''==$("#sq6").find("span").text()){$("#sq6").find("span").text('x'); return true}
         if(''==$("#sq8").find("span").text()){$("#sq8").find("span").text('x'); return true}
     }
     else if("oo"==hthirdRow) {
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("oo"==xfirstRow) {
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("oo"==xsecondRow) {
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
     }
     
     
     // SJEKK FOR BOTVINNNERKOMBINASJONER
     else if("xx"==vfirstRow) {
         $("#sq1").find("span").text()+$("#sq2").find("span").text()+$("#sq3").find("span").text();   
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq2").find("span").text()){$("#sq2").find("span").text('x'); return true}
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
     }
     else if("xx"==vsecondRow) {
         if(''==$("#sq4").find("span").text()){$("#sq4").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq6").find("span").text()){$("#sq6").find("span").text('x'); return true}
     }
     else if("xx"==vthirdRow) {
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
         if(''==$("#sq8").find("span").text()){$("#sq8").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("xx"==hfirstRow) {
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq4").find("span").text()){$("#sq4").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
     }
     else if("xx"==hsecondRow) {
         if(''==$("#sq2").find("span").text()){$("#sq2").find("span").text('x'); return true}
         if(''==$("#sq6").find("span").text()){$("#sq6").find("span").text('x'); return true}
         if(''==$("#sq8").find("span").text()){$("#sq8").find("span").text('x'); return true}
     }
     else if("xx"==hthirdRow) {
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("xx"==xfirstRow) {
         if(''==$("#sq1").find("span").text()){$("#sq1").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq9").find("span").text()){$("#sq9").find("span").text('x'); return true}
     }
     else if("xx"==xsecondRow) {
         if(''==$("#sq3").find("span").text()){$("#sq3").find("span").text('x'); return true}
         if(''==$("#sq5").find("span").text()){$("#sq5").find("span").text('x'); return true}
         if(''==$("#sq7").find("span").text()){$("#sq7").find("span").text('x'); return true}
     }
     else {
         // Trekk et tilfeldig kryss og make a move
         var rand=Math.floor(Math.random(validSquare.length)*validSquare.length)
         var randSquare=validSquare[rand]
         $("#"+validSquare[rand]).find("span").text('x');
         return true
     }
    
     
 }
 
botStart=function(){
     var square='',i=0
     //gir tall mellom 1 og 9
     var rand=Math.floor(Math.random(9)*9)+1
     return status
 }
 
$(document).ready(function(){
    var isNew=isNewGame();
    if(isNew){
        botStart();
    }
    botMakemove()
     
  
   
   
   $(".squares").each(function() {
       
   //MOVES
        $("#"+this.id).click(function() {
           // $("#debug").html(this.id)
          var sq=isSquarevalid(this.id) 
          if(sq){
            $("#"+this.id).find("span").text('o');  
            botMakemove()
          
          }
          checkWinner()
            
        });             


   //MOUSEOVER CSS
        $("#"+this.id).mouseover(function() {
            evalSquare(this.id)
        }).mouseout(function(){
            evalOut(this.id)
        });         
    })
     
     
     
 })