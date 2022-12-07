function save(){
  var checkbox = document.getElementById('checkbox');
  localStorage.setItem('toggle', checkbox.checked);
}

function load(){    
    var checked = JSON.parse(localStorage.getItem('toggle'));
    document.getElementById("checkbox").checked = checked;
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function toggleImage() { 

   //poster 01
   var img1 = "https://i.ibb.co/wzfhF1z/Poster01-f-02.png";
   var img2 = "https://i.ibb.co/MnsMwFT/SideB01.png";
   
   var imgElement = document.getElementById('toggleImage');

   imgElement.src = (imgElement.src === img2)? img1 : img2;
    
    //poster 02
    var img3 = "https://i.ibb.co/fXWhC2S/Poster02-f-04.png";
    var img4 = "https://i.ibb.co/zFNsJs6/SideB02.png";
    
    var imgElement2 = document.getElementById('toggleImage2');
    
    imgElement2.src = (imgElement2.src === img4)?img3 : img4;
    
    //poster03
    var img5 = "https://i.ibb.co/6Wr2J7k/Poster03-01.png";
    var img6 = "https://i.ibb.co/dm8qxJC/SideB03.png";
    
    var imgElement3 = document.getElementById('toggleImage3');
    
    imgElement3.src = (imgElement3.src === img6)?img5 : img6;
    
    //poster04
    var img7 = "https://i.ibb.co/M6h85Xh/Poster04-01.png";
    var img8 = "https://i.ibb.co/3chC6yc/SideB04.png";
    
    var imgElement4 = document.getElementById('toggleImage4');
    
    imgElement4.src = (imgElement4.src === img8)?img7 : img8;
    
    //poster05
    var img9 = "https://i.ibb.co/2Kkz3Sg/Poster05-01-1.png";
    var img10 = "https://i.ibb.co/VjqxjBn/SideB05.png";
    
    var imgElement5 = document.getElementById('toggleImage5');
    
    imgElement5.src = (imgElement5.src === img10)?img9 : img10;
    
    //poster06
    var img11 = "https://i.ibb.co/9r5MZZR/Poster06-01.png";
    var img12 = "https://i.ibb.co/mNm0kzN/Side-B06-1-01.png";
    
    var imgElement6 = document.getElementById('toggleImage6');
    
    imgElement6.src = (imgElement6.src === img12)?img11 : img12;
    
    //poster07
    var img13 = "https://i.ibb.co/9Wndcfp/Poster07.png";
    var img14 = "https://i.ibb.co/LYbw8xs/SideB07.png";
    
    var imgElement7 = document.getElementById('toggleImage7');
    
    imgElement7.src = (imgElement7.src === img14)?img13 : img14;
    
    //poster08
    var img15 = "https://i.ibb.co/h9fssmk/Code-Poster01-01.png";
    var img16 = "https://i.ibb.co/d4Vnyc3/Collage-Side-B-01.png";
    
    var imgElement8 = document.getElementById('toggleImage8');
    
    imgElement8.src = (imgElement8.src === img16)?img15 : img16;
}

function toggleVideo(){
    //video
 var vid1 = "https://player.vimeo.com/video/778724493?h=9ee3605c84&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;mute=1&amp;loop=1&amp;app_id=58479";
 var vid2 = "https://player.vimeo.com/video/778725476?h=2d0422415f&badge=0&autoplay=1&amp;player_id=0&mute=1&amp;loop=1&amp;app_id=58479/embed";
 
 var imgElement = document.getElementById('toggleVid');

 imgElement.src = (imgElement.src === vid2)? vid1 : vid2;
  
}



function isDark(){
    if(localStorage.getItem('toggle') == "true"){
        darkMode();
        toggleImage();
    }
}

function onClick01(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/MnsMwFT/SideB01.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/wzfhF1z/Poster01-f-02.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover01(element){
    element.setAttribute('src','https://i.ibb.co/W3jHq7p/Side0-01c.png');          
}

function unhover01(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/MnsMwFT/SideB01.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/wzfhF1z/Poster01-f-02.png');
    
    }
}

function onClick02(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/zFNsJs6/SideB02.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/fXWhC2S/Poster02-f-04.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover02(element){
    element.setAttribute('src','https://i.ibb.co/3s4dnbn/Side0-02.png');          
}

function unhover02(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/zFNsJs6/SideB02.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/fXWhC2S/Poster02-f-04.png');
    
    }
}

function onClick03(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/dm8qxJC/SideB03.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/6Wr2J7k/Poster03-01.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover03(element){
    element.setAttribute('src','https://i.ibb.co/nRYmH62/Side0-03.png');          
}

function unhover03(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/dm8qxJC/SideB03.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/6Wr2J7k/Poster03-01.png');
    
    }
}

function onClick04(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/3chC6yc/SideB04.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/M6h85Xh/Poster04-01.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover04(element){
    element.setAttribute('src','https://i.ibb.co/gMT370T/Side0-04.png');          
}

function unhover04(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/3chC6yc/SideB04.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/M6h85Xh/Poster04-01.png');
    
    }
}

function onClick05(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/VjqxjBn/SideB05.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/2Kkz3Sg/Poster05-01-1.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover05(element){
    element.setAttribute('src','https://i.ibb.co/7jwGnfJ/Side0-05.png');          
}

function unhover05(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/VjqxjBn/SideB05.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/2Kkz3Sg/Poster05-01-1.png');
    
    }
}

function onClick06(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/mNm0kzN/Side-B06-1-01.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/9r5MZZR/Poster06-01.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover06(element){
    element.setAttribute('src','https://i.ibb.co/C91wyX6/Side0-06.png');          
}

function unhover06(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/mNm0kzN/Side-B06-1-01.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/9r5MZZR/Poster06-01.png');
    
    }
}

function onClick07(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/LYbw8xs/SideB07.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/9Wndcfp/Poster07.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover07(element){
    element.setAttribute('src','https://i.ibb.co/KLmHLDB/Side0-07.png');          
}

function unhover07(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/LYbw8xs/SideB07.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/9Wndcfp/Poster07.png');
    
    }
}

function onClick08(element){
       
   if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', "https://i.ibb.co/d4Vnyc3/Collage-Side-B-01.png");
    } else{
        element.setAttribute('src', "https://i.ibb.co/h9fssmk/Code-Poster01-01.png");
    }
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display="block";
            }

function hover08(element){
    element.setAttribute('src','https://i.ibb.co/LpVLnp7/Side0-Collage-01.png');          
}

function unhover08(element){

        if (localStorage.getItem('toggle') =="true"){
        element.setAttribute('src', 'https://i.ibb.co/d4Vnyc3/Collage-Side-B-01.png');
        
    } else{
        element.setAttribute('src', 'https://i.ibb.co/h9fssmk/Code-Poster01-01.png');
    
    }
}
