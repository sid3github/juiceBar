//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//sider
$(document).ready(function () {
    $('.slider').slider({ indicators: false, duration: 500, height: 800 });
});

//parallax
$(document).ready(function(){
    $('.parallax').parallax();
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
       