$(document).ready(function(){
    $('body').on('keyup', 'input.otp', function(e){
      if($(this).val().length === this.size){
        var inputs = $('input.otp');
        inputs.eq(inputs.index(this) + 1).focus();
      }
      if(e.keyCode == 8 || e.keyCode == 46){
        var inputs = $('input.otp');
        inputs.eq(inputs.index(this) - 1).focus();
      }
    });  
  });