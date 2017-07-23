// Virtual Piano JS . . . .

var PianoNoteWhiteKey=["C","D","E","F","G","A","B"];
var PianoNoteBlackKey=["C#","D#","F#","G#","A#"];

 function myPianoWhiteKey(filename,position,octave)
{   
//console.log(filename);
var Piano= $(filename);
Piano.on('click',function(){
    //console.log(i);    
     var piano = Synth.createInstrument('piano');
         piano.play(PianoNoteWhiteKey[position],octave,2);
    setTimeout(function(){ $(filename).addClass("animated tada");}, 30);
    setTimeout(function(){ $(filename).removeClass("animated tada");}, 90);         
     });
}

function myPianoBlackKey(filename,position,octave)
{
    var Piano=$(filename);
    Piano.click(function(){
        var piano = Synth.createInstrument('piano');
        piano.play(PianoNoteBlackKey[position],octave);
        setTimeout(function(){ $(filename).addClass("animated tada");}, 30);
        setTimeout(function(){ $(filename).removeClass("animated tada");}, 90);         
    });
}



window.onload = function() {
   for(var i =0; i < PianoNoteWhiteKey.length;i++)                     // for first 7 white keys with 4th octave 
   {                                  
   var name = '#WK' + i;  
   myPianoWhiteKey(name,i,4)
      }
   for(var i=0; i < PianoNoteWhiteKey.length;i++)                      // for 8-14 whiite keys with 5th octave
   {
    var name="#WK"+ (i+7);
    myPianoWhiteKey(name,i,5)
   }
   $('button#WK14').click(function(){                                    // for lst white key with 6th octave
    var piano = Synth.createInstrument('piano');
    piano.play('C', 6, 2);
    setTimeout(function(){ $('button#WK14').addClass("animated tada");}, 30);
    setTimeout(function(){ $('button#WK14').removeClass("animated tada");}, 90);
    });
   for(var i=0; i < PianoNoteBlackKey.length; i++)                      // for first five white keys with 4th octave
   {
    var name="#BK"+i;
    myPianoBlackKey(name,i,4)
   }
   for(var i=0; i < PianoNoteBlackKey.length; i++)                      // for later 5 black keys with 5th octve
   {
    var name="#BK"+(i+5);
    myPianoBlackKey(name,i,5)
   }
   for (var i=0; i < PianoKeyPressSound.length ; i++){
    myPianoKeyPressed(PianoKeyPressSound[i]);
   }
}














function myPianoKeyPressed(keyObj){
    var filename = keyObj.id;
    $("body").keypress(function(event){
    if(event.keyCode == keyObj.keyCodeCapital || event.keyCode == keyObj.keyCodeSmall){
        $(filename).click();
    }
});
}

var PianoKeyPressSound=[{
    'id': 'button#WK0',
    'keyCodeCapital':'65',
    'keyCodeSmall':'97'
},
{
    'id': 'button#WK1',
    'keyCodeCapital':'83',
    'keyCodeSmall':'115'
},
{
    'id': 'button#WK2',
    'keyCodeCapital':'68',
    'keyCodeSmall':'100'
},
{
    'id': 'button#WK3',
    'keyCodeCapital':'70',
    'keyCodeSmall':'102'
},
{
    'id': 'button#WK4',
    'keyCodeCapital':'71',
    'keyCodeSmall':'103'
},
{
    'id': 'button#WK5',
    'keyCodeCapital':'72',
    'keyCodeSmall':'104'
},
{
    'id': 'button#WK6',
    'keyCodeCapital':'74',
    'keyCodeSmall':'106'
},
{
    'id':'button#WK7',
    'keyCodeCapital':'75',
    'keyCodeSmall':'107'
},
{
    'id':'button#WK8',
    'keyCodeCapital':'76',
    'keyCodeSmall':'108'
},
{
    'id':'button#WK9',
    'keyCodeCapital':'90',
    'keyCodeSmall':'122'
},
{
    'id':'button#WK10',
    'keyCodeCapital':'88',
    'keyCodeSmall':'120'
},
{
    'id':'button#WK11',
    'keyCodeCapital':'67',
    'keyCodeSmall':'99'
},
{
    'id':'button#WK12',
    'keyCodeCapital':'86',
    'keyCodeSmall':'118'
},
{
    'id':'button#WK13',
    'keyCodeCapital':'66',
    'keyCodeSmall':'98'
},
{
    'id':'button#WK14',
    'keyCodeCapital':'78',
    'keyCodeSmall':'110'
},
{
    'id':'button#BK0',
    'keyCodeCapital':'81',
    'keyCodeSmall':'113'
},
{
    'id':'button#BK1',
    'keyCodeCapital':'87',
    'keyCodeSmall':'119'
},
{
    'id':'button#BK2',
    'keyCodeCapital':'69',
    'keyCodeSmall':'101'
},
{
    'id':'button#BK3',
    'keyCodeCapital':'82',
    'keyCodeSmall':'114'
},
{
    'id':'button#BK4',
    'keyCodeCapital':'84',
    'keyCodeSmall':'116'
},
{
    'id':'button#BK5',
    'keyCodeCapital':'89',
    'keyCodeSmall':'121'
},
{
    'id':'button#BK6',
    'keyCodeCapital':'85',
    'keyCodeSmall':'117'
},
{
    'id':'button#BK7',
    'keyCodeCapital':'73',
    'keyCodeSmall':'105'
},
{
    'id':'button#BK8',
    'keyCodeCapital':'79',
    'keyCodeSmall':'111'
},
{
    'id':'button#BK9',
    'keyCodeCapital':'80',
    'keyCodeSmall':'112'
}];

// for( var i = 0;  i < PianoKeySound.length; i++)
// {
//     var obj=PianoKeySound[i];
//     $("body").keypress(function(event){
//         if(event.keyCode == obj.keyCodeCapital || event.keyCode == obj.keyCodeSmall){
//             $(obj.id).click();
//         }
//     });
// }

// $("body").keypress(function(event){
//     if(event.keyCode == 65){
//         $('button#WK0').click();
//     }
// });

// $('button#WK0').click(function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('C', 4, 2); // plays C4 for 2s using the 'piano' sound profile
//     setTimeout(function(){ $("button#WK0").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK0").removeClass("animated tada");}, 90);
// });

// // $('body').keypress(function(event) {                      
// //     var target = event.target;                          
// //     if (event.keyCode == 65 )
// //     {
// //         var piano = Synth.createInstrument('piano');
// //     piano.play('C', 4, 2);
// //     }
// // })

// $("body").keypress(function(event){
//     if(event.keyCode == 83){
//         $('button#WK1').click();
//     }
// });

// $('button#WK1').on('click',function(){
// var piano = Synth.createInstrument('piano');
//      piano.play('D', 4, 2);
//      setTimeout(function(){ $("button#WK1").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK1").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 68){
//         $('button#WK2').click();
//     }
// });

// $('button#WK2').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('E', 4, 2); 
//     setTimeout(function(){ $("button#WK2").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK2").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 70){
//         $('button#WK3').click();
//     }
// });

// $('button#WK3').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('F', 4, 2);
//     setTimeout(function(){ $("button#WK3").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK3").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 71){
//         $('button#WK4').click();
//     }
// });

// $('button#WK4').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('G', 4, 2);
//     setTimeout(function(){ $("button#WK4").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK4").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 72){
//         $('button#WK5').click();
//     }
// });

// $('button#WK5').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('A', 4, 2);
//     setTimeout(function(){ $("button#WK5").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK5").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 74){
//         $('button#WK6').click();
//     }
// });

// $('button#WK6').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('B', 4, 2);
//     setTimeout(function(){ $("button#WK6").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK6").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 75){
//         $('button#WK7').click();
//     }
// });

// $('button#WK7').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('C', 5, 2);
//     setTimeout(function(){ $("button#WK7").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK7").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 76){
//         $('button#WK8').click();
//     }
// });

// $('button#WK8').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('D', 5, 2);
//     setTimeout(function(){ $("button#WK8").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK8").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 90){
//         $('button#WK9').click();
//     }
// });

// $('button#WK9').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('E', 5, 2);
//     setTimeout(function(){ $("button#WK9").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK9").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 88 || event.keyCode == 120){
//         $('button#WK10').click();
//     }
// });

// $('button#WK10').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('F', 5, 2);
//     setTimeout(function(){ $("button#WK10").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK10").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 67 || event.keyCode == 99){
//         $('button#W11').click();
//     }
// });

// $('button#WK11').click(function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('G', 5, 2); 
//     setTimeout(function(){ $("button#WK11").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK11").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 86){
//         $('button#WK12').click();
//     }
// });

// $('button#WK12').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('A', 5, 2);
//     setTimeout(function(){ $("button#WK12").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK12").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 66){
//         $('button#WK13').click();
//     }
// });

// $('button#WK13').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('B', 5, 2);
//     setTimeout(function(){ $("button#WK13").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK13").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 78){
//         $('button#WK14').click();
//     }
// });

// $('button#WK14').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('C', 6, 2);
//     setTimeout(function(){ $("button#WK14").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#WK14").removeClass("animated tada");}, 90);
// });                   

// $("body").keypress(function(event){
//     if(event.keyCode == 81){
//         $('button#BK0').click();
//     }
// });

// $('button#BK0').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('C#', 4, 2);
//     setTimeout(function(){ $("button#BK0").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK0").removeClass("animated tada");}, 90);
// });

// $("body").keypress(function(event){
//     if(event.keyCode == 87){
//         $('button#BK1').click();
//     }
// });                   

// $('button#BK1').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('D#', 4, 2);
//     setTimeout(function(){ $("button#BK1").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK1").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 69){
//         $('button#BK2').click();
//     }
// }); 

// $('button#BK2').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('F#', 4, 2);
//     setTimeout(function(){ $("button#BK2").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK2").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 82){
//         $('button#BK3').click();
//     }
// }); 

// $('button#BK3').on('click',function(){
// var piano = Synth.createInstrument('piano');
//     piano.play('G#', 4, 2);
//     setTimeout(function(){ $("button#BK3").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK3").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 84){
//         $('button#BK4').click();
//     }
// }); 

// $('button#BK4').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('A#', 4, 2);
//     setTimeout(function(){ $("button#BK4").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK4").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 89){
//         $('button#BK5').click();
//     }
// }); 

// $('button#BK5').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('C#', 5, 2);
//     setTimeout(function(){ $("button#BK5").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK5").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 85){
//         $('button#BK6').click();
//     }
// }); 

// $('button#BK6').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('D#', 5, 2);
//     setTimeout(function(){ $("button#BK6").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK6").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 73){
//         $('button#BK7').click();
//     }
// }); 

// $('button#BK7').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('F#', 5, 2);
//     setTimeout(function(){ $("button#BK7").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK7").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 79){
//         $('button#BK8').click();
//     }
// }); 

// $('button#BK8').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('G#', 5, 2);
//     setTimeout(function(){ $("button#BK8").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK8").removeClass("animated tada");}, 90);
// });                  

// $("body").keypress(function(event){
//     if(event.keyCode == 80){
//         $('button#BK9').click();
//     }
// }); 

// $('button#BK9').on('click',function(){
//     var piano = Synth.createInstrument('piano');
//     piano.play('A#', 5, 2);
//     setTimeout(function(){ $("button#BK9").addClass("animated tada");}, 30);
//     setTimeout(function(){ $("button#BK9").removeClass("animated tada");}, 90);
// });