$(document).ready(function() {
  $('.clicker').click(function(){
    $(this).next().toggle(250, function () {
      $(this).toggleClass('show');
      // $(this).addClass('showing');
    });
  });
});
