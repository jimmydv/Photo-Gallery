
$(document).ready(function(){
    $(".search-input").blur(function(){
        $(".search-input").val('Search ');
    });
});

$(document).ready(function(){
    $(".search-input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".gallery img").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });