  $('#fatag').change(function() {
    
    $('#faicon').removeClass()

    $('#faicon').addClass("fa " + $('#fatag').val());

  });


  $('#color').change(function() {
    
    $('#faicon').css("color",$('#color').val());

  });
