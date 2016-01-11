(function(){

  Alert_tc = function(title,content,sizeX,sizeY){

    this.title = title || "Alert";
    this.content = content || "";
    this.sizeX = sizeX || 500;
    this.sizeY = sizeY || 300;

    this.setTitle = function(title){
      this.title = title;
    }

    this.setContent = function(){
      this.content = content;
    }

    this.setSizeX = function(){
      this.sizeX = sizeX;
    }

    this.setSizeY = function(){
      this.sizeY = sizeY;
    }

    this.error = function(){
      $('body').append(template(this.title,this.content));
      $('#alert-notify').animate({
        right : 50,
      },1000, function(){
        $("#alert-notify").click(function (e){
          $('#alert-notify').animate({
            right : -1000,
          },1000, function(){})
        });
      });
    }

    template = function(title,content){
      var format = "<div id='alert-notify' class='incorrect-notify'>" +
          "<p id='title'>" + title + "</p>" +
          "<p id='content'>" + content + "</p>"
        "</div>";
      return format;
    }
  }

  miAlerta = new Alert_tc();

  miAlerta.error();


})()
