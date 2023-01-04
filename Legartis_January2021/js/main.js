if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}  

var lis = document.querySelectorAll('.custom-menu-primary .hs-menu-wrapper>ul li>a,.custom-header-buttons .hs-menu-wrapper>ul li>a,.custom-header-language .hs-menu-wrapper>ul li>a');
lis.forEach(function(el, index) {
  var text = el.textContent;
  el.parentElement.classList.add(text.toLowerCase().trim().replace(/[^A-Z0-9]+/ig, "_"))
});

$('.mobile-trigger').click(function() {
  $('body').toggleClass('mobile-open');
  return false;
});

$('.custom-header-buttons .hs-menu-wrapper>ul>li.request_demo>a,.contactPopup').click(function(){
  $('body').addClass('popup-open');
});

$('.contact_popup_close').click(function(){
  $('body').removeClass('popup-open');
});

$('.blog-topics .topic').click(function(){
  $(this).parent().toggleClass('active');
});

$('body').click(function(){
  $('.blog-topics .topic').parent().removeClass('active');
});

$('.blog-topics').click(function(e){
  e.stopPropagation();
});

$('.subscribe-button').click(function(){
  $('.subscription-popup-box').addClass('popup-open');
});

$('.subscription-popup-box .subscription-popup-box-inner .envelope-close-icon .popup-close-icon,body').click(function(){
  $('.subscription-popup-box').removeClass('popup-open');
});

$('.subscribe-button,.subscription-popup-box-inner').click(function(e){
  e.stopPropagation();
});








