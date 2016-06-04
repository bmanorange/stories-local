//http://jsfiddle.net/y4CX4/1/

$(document).ready(function() {
      $('#simple-menu').sidr({
          name: 'sidr', 
          speed: 200, 
          side: 'left',
          source: null, 
          renaming: true, 
          body: 'body'
					
         });
    });

$(document).ready(function() {
    $('.sub-menu-sidr').hide();

    $("#sidr li:has(ul)").click(function(){

    $("ul",this).toggle('fast');
    });
});