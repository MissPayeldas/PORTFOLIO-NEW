let menuIcon = Document.querySeletor("#menu-icon");
let navbar = Document.querySeletor('.navbar');
let sections = Document.querySeletor('section');
let navLink  =Document.querySeletor('header nav a');

window.onscroll=() => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let ofset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(Top >= offset && top< offset +height){
            navlinks.forEach(link => {
                Links.classList.remove('active');
                documen.querySeletor('header nav a [href*=' + id +' ]').classList.add('active')
            })
        }
    })
}




menuIcon.oneclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classLIst.toggle('active');
}