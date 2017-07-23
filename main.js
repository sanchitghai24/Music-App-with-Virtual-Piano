var songs = [{                                                                  // Array of Objects
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
        'fileName': 'song1.mp3',
        'image' : 'song0.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image' : 'song1.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image' : 'song2.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image' : 'song3.jpg'
    }]

    $('.song-page .song-page-to-welcome-screen').on('click',function(){
      $('.welcome-screen').removeClass('hidden');
      $('.song-page').addClass('hidden');
      $('.virtual-piano').addClass('hidden');
    });

    function WelcomeScreenGo(){                                                 // Function for welcome screen wala Go button
    var name = $('#name-input').val();
    if(name.length > 3) {                                                       // agar character =< 3 tab If execute karo
    var message = "Welcome, " +  name;
    $('.song-page .user-name').text(message);                                   // display 'welcome (entered characters)' after Go
    $('.welcome-screen').addClass('hidden');                                    // to hidewel-come screen after Go
    $('.song-page').removeClass('hidden');                                      // to unhide song-page screen after Go
    $('audio').attr('src','song1.mp3')                                          // initializing a song when app opens up
    }
    else {
    $('#name-input').addClass('error');                                         // Agar input box me 2 ya 2 se kam characters hai to error show krdo box red karke
    }
    }

$('.welcome-screen button').on('click', function() {                            // Click karne pe Go hojaye
  WelcomeScreenGo()
});

$('body').on('keypress',function(event){                                       // Enter dabao to bhi click hojaye
  var target=event.target;
  if(event.keyCode == 13)
  {
    WelcomeScreenGo()
  }
});

function toggleSong(){                                                          // toggle i.e. On ko OFF and Off ko On kr de wala function for song
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
song.play();
$('#pause-icon').removeClass('hidden');
$('#play-icon').addClass('hidden');
}
else {
console.log('Pausing');
song.pause();
$('#play-icon').removeClass('hidden');
$('#pause-icon').addClass('hidden');
}
}

$('.play-icon').on('click', function() {
toggleSong();
});

$('body').keyup(function(event) {                                       // poori body me keypress function detect kro !
    var target = event.target;                                                  //variable target = all the events happing detected
    if (event.keyCode == 32 && target.tagName !='INPUT')                        // jab b spacebar(32) + it should not be in an input box..to hi if chalana !
    {
        toggleSong();
    }
});

$("body").on('click',function(){
        setTimeout(function(){ $(".user-name").addClass("animated zoomIn");}, 500);
        setTimeout(function(){ $(".user-name").removeClass("animated zoomIn");}, 1000);
});

function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function updateCurrentTime() {                                                 // Function to Update Current Time of Song
    var song = document.querySelector('audio');                                
    var currentTime = Math.floor(song.currentTime);                            // 2 point decimal krne k liye time ko
    currentTime = fancyTimeFormat(currentTime);                                // To convert Current Time in seconds to Fancy time format ( eg: 2:30)
    var duration = Math.floor(song.duration);                                  // song duraion ko 2 point decimal me cnvrt krne k liye
    duration = fancyTimeFormat(duration)                                       // duration ko fancy formt dena
    $('.time-elapsed').text(currentTime);                                      // Jitna time hogya song bajte hue vo btao 
    $('.song-duration').text(duration);                                        // Jitna bada song h display krdo
}

function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)                 // current-song-name class ko select kro and usme attribute add karo source ka..and path do
    $('.current-song-name').text(songObj.name)                                  // current-song-name class ko select kro n usme text dalo Song name ka object se utha ke
    $('.current-song-album').text(songObj.album)                                // current-song-name class ko select kro n usme text dalo Song album ka object se utha ke
    
}

function addSongNameClickEvent(songObj, position){                // is function se we can directly give each song click krne pe same song continue ho nd click krne pe song chale wala event
var songName=songObj.fileName;
var id='#song'+position;                                           // yahan we r defining an id so that we can access songs using it !
$(id).click(function() {                                           
var audio = document.querySelector('audio');                       //  audio variable me hum audio tag ko select kr re h
var currentSong = audio.src;                                       // currentSong variable ko hum audio ka source allot kr re h
if(currentSong.search(songName) != -1)                             // currentSong search krne pe agar songName mil jata h to if statement execute krdo
{
toggleSong();
}
else {
audio.src = songName;                                              // nahi toh audio k src ko songName allot kr do and play krdo
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}

// for (var i = 0; i < fileNames.length ; i++) {                      // Repeat this line of code from i=0 till i does not become equal to fileNames array ki length ki value k
//    addSongNameClickEvent(fileNames[i],i)                          // FileNames Array se i index wali file ko lo aur song(i) wali id me dal do !
// }

// $('#songs').DataTable({                                                         // DataTable selected which is applied to songs id !!
//         paging: false                                                           //  to hide the paging of data :)
//     });

// var CurrentSongRepeat =0;
// $(".Song-repeat").click(function(){
//     CurrentSongRepeat = 1 - CurrentSongRepeat;
//     $(".Song-repeat").toggleClass('disabled')
//     if(CurrentSongRepeat == 1){
//         $("audio").attr("loop");
//     }
//     else{
//         $("audio").removeAttribute("loop");
//     }
// });

// function randomExcluded(min, max, excluded) {
//     var n = Math.floor(Math.random() * (max-min) + min);
//     if (n >= excluded) n++;
//     return n;
// }

//         var currentSongNumber = 1;
//         var willLoop = 0;
//         var willShuffle = 0; // will use this soon
//         $('.fa-repeat').on('click',function() 
//         {
//             $('.fa-repeat').toggleClass('disabled')                                            // To toggle the class disabled i.e. remove and add alternately
//             willLoop = 1 - willLoop;
//         });
        
//         $('.fa-random').on('click',function()
//         {
//             $('.fa-random').toggleClass('disabled')
//             willShuffle = 1 - willShuffle;
//         });
      
//         function timeJump() {
//             var song = document.querySelector('audio')
//             song.currentTime = song.duration - 2;                                                   // this is use to skip the duration of the song
//         }
      
// $('audio').on('ended',function() {
//     var audio = document.querySelector('audio');
//     if (willShuffle == 1) {
//         var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
//         var nextSongObj = songs[nextSongNumber-1];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber = nextSongNumber;
//     }
//     else if(currentSongNumber < 4) {
//         var nextSongObj = songs[currentSongNumber];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber = currentSongNumber + 1;
//     }
//     else if(willLoop == 1) {
//         var nextSongObj = songs[0];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber =  1;
//     }
//     else {
//         $('#play-icon').removeClass('hidden');
//         $('#pause-icon').addClass('hidden');
//         audio.currentTime = 0;
//     }
// });

window.onload = function() {
   changeCurrentSongDetails(songs[0]);
  for(var i =0; i < songs.length;i++) {                              // repeat loop from i=0 till it is less than songList ki length
        var obj=songs[i];                                            // obj variable me humne array of objects se ith position ki object dal di
        var name = '#song' + (i);                                    // id bana re h so that dhoond sake use to select
        var song = $(name);                                          // variable song me jquery dal di to select the tag with this id
        song.find('.song-name').text(obj.name);                      // id element k andar class dhundo song-name n ith position wala name ka object wala text dal do
        song.find('.song-artist').text(obj.artist);                  // id element k andar class dhundo song-artist n ith position wala artist ka object wala text dal do
        song.find('.song-album').text(obj.album);                    // id element k andar class dhundo song-album n ith position wala album ka object wala text dal do
        song.find('.song-length').text(obj.duration);                // id element k andar class dhundo song-length n ith position wala duration ka object wala text dal do
        addSongNameClickEvent(obj,i)
      } 
        $('#songs').DataTable({paging:false});                                       // initializing dataTables
        $("#songs_filter input").attr('placeholder','Search Your Song Here ');       // Placing a placeholder in song search bar :)
updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
}
