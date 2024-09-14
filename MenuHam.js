function toggleMenu(){
    var menu = document.getElementById('ham');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else{
        menu.style.display='block';
    }
}