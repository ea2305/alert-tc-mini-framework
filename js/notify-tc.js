(function(){

  //Principal object Alert_tc
  Alert_tc = function(title,content,sizeX,sizeY){

    this.title = title || "";
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

    /**
     *Show alert when the call is of error
     *@param title :  title of alert
     *@param content : content of alert
     */
    this.error = function(title,content){
        title = (this.title != '') ? this.title : title;
        content = (this.content != '') ? this.content : content;

        $('body').append(template(title,content,false));
        $('.alert-notify').animate({
            width: 450,
            right : 50,
            opacity : .7
        },550, function(){
        $(".alert-notify").click(function (e){
            $('.alert-notify').animate({
                width: 0,
                right : 0,
                opacity : 0
            },400, function(){
            //Eliminate element
                $('.alert-notify').remove();
            })
        });
      });
    }

    //Show alert when the call is correct
    this.correct = function(){
        $('body').append(template(this.title,this.content,true));
        $('.alert-notify').animate({
            width: 450,
            right : 50,
            opacity : .7
        },550, function(){
        $(".alert-notify").click(function (e){
            $('.alert-notify').animate({
                width: 0,
                right : 0,
                opacity : 0
            },440, function(){
            //Eliminate element
            $('.alert-notify').remove();
          })
        });
      });
    }

    template = function(title,content,mode){
      //Select style
      var selected = (mode) ? "correct-notify":"incorrect-notify";
      var format = "<div class='" + selected + " alert-notify'>" +
          "<p id='title'>" + title + "</p>" +
          "<p id='content'>" + content + "</p>"
        "</div>";
      return format;
    }
  }

  miAlerta = new Alert_tc();

  //Text incorrect on pressed
  $('#buttom_1').click(function(e){
    miAlerta.error('Se0ha0detectado0un0errorjkddfjg2hjksdfjhgjkkhsdfjkkkk','informe de error en el sistema...');
  })

  //Text correct on pressed
  $('#buttom_2').click(function(e){
      miAlerta.correct();
  })

})()
