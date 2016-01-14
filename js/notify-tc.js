//Principal object Alert_tc
Alert_tc = function(title){

  this.title = title || "";
  this.sizeX = 400;
  this.sizeY = 150;
  this.timeIn = 550;
  this.timeOut = 400;

  var translate_start = {
      width: this.sizeX,
      opacity : 1
  };

  var translate_end = {
      width: 0,
      right : 0,
      opacity : 0
  };

  this.setTitle = function(title){
      this.title = title;
  }

  this.error = function(title,content){
      var timeLimit = 5000;
      title = (this.title != '') ? this.title : title;
      $('body').append(template(title,false));
      $('.alert-notify').animate(translate_start,this.timeIn, function(){

          setTimeout(function(){

              $('.alert-notify').animate(translate_end,this.timeOut, function(){
              //Eliminate element
                  $('.alert-notify').remove();
              })
          }, timeLimit);

          $("div").click(function (e){
              $('.alert-notify').animate(translate_end,this.timeOut, function(){
              //Eliminate element
                  $('.alert-notify').remove();
              })
          });
    });
  }

  //Show alert when the call is correct
  this.success = function(title,content){
      var timeLimit = 5000;
      title = (this.title != '') ? this.title : title;
      $('body').append(template(title,true));
      $('.alert-notify').animate(translate_start,this.timeIn, function(){

          setTimeout(function(){
              $('.alert-notify').animate(translate_end,this.timeOut, function(){
              //Eliminate element
                  $('.alert-notify').remove();
              })
          }, timeLimit);

          $("div").click(function (e){
              $('.alert-notify').animate(translate_end,this.timeOut, function(){
              //Eliminate element
                  $('.alert-notify').remove();
              })
          });
    });
  }

  template = function(title,mode){
    //Select style
    var selected = (mode) ? "correct-notify":"incorrect-notify";
    var format = "<div class='" + selected + " alert-notify'>" +
        "<h2 id='title'>" + title + "</h2>" +
      "</div>";
    return format;
  }
}
