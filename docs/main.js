let position1 = pageYOffset;
onscroll = () => {
    let position2 = pageYOffset;
    let navbar = document.querySelector('.navbar');
    if(position1>=position2){
        navbar.style.top='0';
    }else{
        navbar.style.top='-100px';
    }
    position1 = position2;
}