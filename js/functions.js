function hover_menuLink() {
    document.getElementById("menuLink").style = "opacity:1";
}

function out_menuLink() {
    document.getElementById("menuLink").style = "opacity:0.8";
}

function changeColorOnHover(arg, hover) {
    if (hover) {
        document.getElementById("" + arg).className = "invert";
    } else {
        document.getElementById("" + arg).className = "";
    }
}
//AJAX: 

//DISCOGRAPHIE:
///Defilement de l'album


//GALLERY PHOTO:
///Au choix de l'album

///Au defilement de photo de l'album
///Au choix photo dans l'album