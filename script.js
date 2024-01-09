// Allow accessing the camera

let selectedPlayers = [];
var data = "change it"

var video = document.querySelector("#videoElement");

//mediaDevice and userMedia to navigate the access for camera

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true
            // after allowing the camera start the video stream
        }).then(function(stream) {
            video.srcObject = stream
            //play the video
            video.play();
        }).catch(function(error) {
            console.log(error);
        });
    }

    // capture Images

    // var image = document.getElementById('image'),
    //     context = image.getContext('2d');  //setting for resolution of image

    // document.getElementById('start-button').addEventListener('click' , function() {
    //         // draw a image when the button clicked on the canvas
        
    //     context.drawImage(video , 0 , 0 , image.width , image.height);
        
    // });

    // script.js
    function captureAndSaveScreenshot() {
        // Set the height and width of the body to 100vh and 100vw

        setTimeout(() => {
            document.getElementById('end-screen').style.display = 'flex';
           
        }, 15000); // 10 seconds timeout
      
        setTimeout(() => {
            // Capture the screenshot of the entire body
            html2canvas(document.body).then(canvas => {
                // Convert the canvas to a Blob
                canvas.toBlob(blob => {
                    // Convert Blob to base64
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        const base64Data = reader.result;
                        data = base64Data;
    
                        // Create an image element and set the base64 data as its source
                        const screenshotImage = new Image();
                        screenshotImage.src = base64Data;
    
                        screenshotImage.style.position = 'absolute';
                        screenshotImage.style.zIndex = '122505';
                        screenshotImage.style.width = '100vw';
                        screenshotImage.style.height = '100vh';
    
                        // Display the image on the page (you can adjust this part based on your requirements)
                        const screenshotContainer = document.getElementById('screenshot-container');
                        screenshotContainer.innerHTML = ''; // Clear previous screenshots
                        screenshotContainer.appendChild(screenshotImage);
    
                        // Reset the height and width of the body to their original values
                        document.body.style.height = '';
                        document.body.style.width = '';
                    };
                });
            });
        }, 10000); // 10 seconds timeout
    }
    
    function sendEmail() {
        const userEmail = document.getElementById('emailInput').value;
        console.log(data);
    
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "dkalaitzis@instacar.gr",
            Password: "7F3087455F05367350FDBD0B1E8BE577FF3C",
            To: userEmail, 
            From: "dkalaitzis@instacar.gr",
            Subject: "This is the subject",
            Body: "And this is the body",
            Attachments: [
                {
                    name: "image.png",
                    data: data,
                }]
        }).then(
            message => alert(message)
        );
    }
    
    


    // document.getElementById('start-button').onclick = function() {
    //     captureAndSaveScreenshot();
    // }


    function toggleSelection(playerId) {
        const playerImage = document.getElementById(playerId);
    
        
    
        // Check if the player is already selected
        const index = selectedPlayers.indexOf(playerId);
        if (index !== -1) {
            // Player is already selected, remove the selection
            selectedPlayers.splice(index, 1);
            if(playerId == 'player1'){
          playerImage.src = './players/ergin.png'
        }
        else if(playerId == 'player2'){
          playerImage.src = './players/Jerian.png'
        }
        else if(playerId == 'player3'){
          playerImage.src = './players/Juancho.png'
        }
        else if(playerId == 'player4'){
          playerImage.src = './players/Kostas.png'
        }
        else if(playerId == 'player5'){
          playerImage.src = './players/KostasA.png'
        }
        else if(playerId == 'player6'){
          playerImage.src = './players/loannis.png'
        }
        else if(playerId == 'player7'){
          playerImage.src = './players/Mathias.png'
        }
        else if(playerId == 'player8'){
          playerImage.src = './players/Marius.png'
        }
        else if(playerId == 'player9'){
          playerImage.src = './players/Ninos.png'
        }
        
        } else {
            // Player is not selected, add the selection
    
            if(playerId == 'player1'){
          playerImage.src = './players/ergin-selected.png'
        }
        else if(playerId == 'player2'){
          playerImage.src = './players/Jerian-selected.png'
        }
        else if(playerId == 'player3'){
          playerImage.src = './players/Juancho-selected.png'
        }
        else if(playerId == 'player4'){
          playerImage.src = './players/KostasS-selected.png'
        }
        else if(playerId == 'player5'){
          playerImage.src = './players/kostas-selected.png'
        }
        else if(playerId == 'player6'){
          playerImage.src = './players/loannis-selected.png'
        }
        else if(playerId == 'player7'){
          playerImage.src = './players/Mathias-selected.png'
        }
        else if(playerId == 'player8'){
          playerImage.src = './players/Marius-selected.png'
        }
        else if(playerId == 'player9'){
          playerImage.src = './players/ntinos-selected.png'
        }
        
            selectedPlayers.push(playerId);
            
            
        }
    }    

function startGame() {
    console.log("hello")
    captureAndSaveScreenshot();
    if (selectedPlayers.length === 2) {
      console.log(selectedPlayers[0])
        // Proceed with starting the game and apply animations to selected players
        var splashScreen = document.getElementById("splash-screen");
         var startButton = document.getElementById("start-button");
          var countdownScreen = document.getElementById("countdown-screen");

          splashScreen.display = "none";
          startButton.style.display = "none";
          countdownScreen.style.display = 'block';
           
          countdown(6); 
  
            
        
        //   const video = document.getElementById('video');
        //   const video1 = document.getElementById('video1');
        //   const entityVideo = document.getElementById('entityvideo');
        // const entityVideo1 = document.getElementById('entityvideo1');

        const entityImage = document.getElementById("entityimage");
        const entityImage1 = document.getElementById("entityimage");
        // entityImage.setAttribute('visible', 'true');
       const image = document.getElementById('image9');
       const image1 = document.getElementById('image10');
    
    
        
       
     if(selectedPlayers[0] == 'player1'){
      image.setAttribute('src', './videos/erignimg.png');
     }
     if(selectedPlayers[0] == 'player2'){
      image.setAttribute('src', './videos/jerian.png');
     }
     if(selectedPlayers[0] == 'player3'){
      image.setAttribute('src', './videos/Hernagomez.png');
     }
     if(selectedPlayers[0] == 'player4'){
      image.setAttribute('src', './videos/kostasSimg.png');
     }
     if(selectedPlayers[0] == 'player5'){
      image.setAttribute('src', './videos/KostasA.png');
     }
     if(selectedPlayers[0] == 'player6'){
      image.setAttribute('src', './videos/loannis.png');
     }
     if(selectedPlayers[0] == 'player7'){
      image.setAttribute('src', './videos/Mathias.png');
     }
     if(selectedPlayers[0] == 'player8'){
      image.setAttribute('src', './videos/marius.png');
     }
     if(selectedPlayers[0] == 'player9'){
      image.setAttribute('src', './videos/ntinos.png');
     }
     if(selectedPlayers[1] == 'player1'){
      image1.setAttribute('src', './videos/erignimg.png');
     }
     if(selectedPlayers[1] == 'player2'){
      image1.setAttribute('src', './videos/jerian.png');
     }
     if(selectedPlayers[1] == 'player3'){
      image1.setAttribute('src', './videos/Hernagomez.png');
     }
     if(selectedPlayers[1] == 'player4'){
      image1.setAttribute('src', './videos/kostasSimg.png');
     }
     if(selectedPlayers[1] == 'player5'){
      image1.setAttribute('src', './videos/KostasA.png');
     }
     if(selectedPlayers[1] == 'player6'){
      image1.setAttribute('src', './videos/loannis.png');
     }
     if(selectedPlayers[1] == 'player7'){
      image1.setAttribute('src', './videos/Mathias.png');
     }
     if(selectedPlayers[1] == 'player8'){
      image1.setAttribute('src', './videos/marius.png');
     }
     if(selectedPlayers[1] == 'player9'){
      image1.setAttribute('src', './videos/ntinos.png');
     }
     
        
    //  entityImage.setAttribute('material', `src: #image; opacity: 1; roughness: 0; metalness: 0; transparent: false`);
    //  entityImage1.setAttribute('material', `src: #image; opacity: 1; roughness: 0; metalness: 0; transparent: false`);

              
           
            // entityimage.setAttribute('visible', 'true');
            // entityImage1.setAttribute('visible', 'true');
            document.getElementById('image9').style.display = 'block';
            document.getElementById('image10').style.display = 'block';


          splashScreen.style.display = "none";

          
        // Add your animation logic here
    } else {
        // Show the popup if 2 players are not selected
        document.getElementById('popup').style.display = 'block';
    }


function closePopup() {
    // Close the popup
    document.getElementById('popup').style.display = 'none';
}


function countdown(seconds) {
          var n = seconds;
          
         
           
             document.getElementById('countdown-screen').style.zIndex = '1023200';
             document.getElementById('countdown-screen').style.position= 'absolute';
        for (let i = seconds; i > 0; i--) {
            setTimeout(() => {
             
                document.getElementById(`countdown-${i}`).style.display = 'block';
                if(i < n){
                  document.getElementById(`countdown-${i+1}`).style.display = 'none'; 
                }
                
          
                
                
            }, (seconds - i) * 1500);
        }

        // After countdown, start the game or add your logic here
        setTimeout(() => {
            document.getElementById('countdown-screen').style.display = 'none';
           

            // Add your animation logic here
        }, seconds * 1500);
    }

     
        console.log(selectedPlayers[1])
        // image.setAttribute('src', './videos/ergin.mp4');
       


        document.getElementById("start-button").style.visibility = "visible";

        // entityimage.setAttribute("color", '0 0.6 0.9');
    
    // arjsloader.style.display = "none";
    // var taptoplay = document.getElementById("vid_play");
    // taptoplay.style.display = "block"
    // taptoplay.addEventListener('click', () => {
    //     taptoplay.style.display = "none"
    //     entityimage.setAttribute('visible' , 'true');
        

  
            


      }

      var splashScreen = document.getElementById("splash-screen");
            // Check if the browser supports fullscreen API
            function requestFullscreen() {
                if (splashScreen.requestFullscreen) {
                    splashScreen.requestFullscreen();
                } else if (splashScreen.mozRequestFullScreen) { // Firefox
                    splashScreen.mozRequestFullScreen();
                } else if (splashScreen.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    splashScreen.webkitRequestFullscreen();
                } else if (splashScreen.msRequestFullscreen) { // IE/Edge
                    splashScreen.msRequestFullscreen();
                }
            }

            var fullscreenButton = document.getElementById("fullscreen-button");
            fullscreenButton.addEventListener("click", requestFullscreen);
            fullscreenButton.addEventListener("click", console.log('hello'));
        
 
      function closePopup() {
        // Close the popup
        document.getElementById('popup').style.display = 'none';

        
    }

    


//Done.....!! 