  $('#fatag').change(function() {
    
    $('#faicon').removeClass()

    $('#faicon').addClass("fa " + $('#fatag').val());

  });


  $('#color').change(function() {
    
    $('#faicon').css("color",$('#color').val());

  });

   $('#flatuidrop').change(function() {
    
    $('#faicon').css("color",$('#flatuidrop').val());

  });

