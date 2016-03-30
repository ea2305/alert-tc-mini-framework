(function () {
    //Principal object Alert_tc
    Alert_tc = function () {

        //Standar sizes
        this.sizeX = 400;
        this.sizeY = 150;

        //Changes in sizes
        this.sizeY_small = 120;
        this.sizeY_medium = 250;

        //Time of animation
        this.time_alert = 5000;

        //Current size of message
        this.textSize = 0;

        //Efects of objet
        this.translate_start = {
            "height"  : (this.textSize + 100),
            "opacity" : 1,
            "width"   : "30%"
        };

        this.translate_end = {
            "height"  : (this.textSize + 100),
            "opacity" : 0,
            "width"   : "0%"
        };

        this.log = function (title) {

            title = title.trim();//Remove initial space outside string
            var kind = "log-notify";

            //Get size of string to fix bar
            this.textSize = title.length;

            this.setUpAlert(title,kind);
        };

        //Show alert when the call is correct
        this.success = function (title) {
            title = title.trim();//Remove initial space outside string
            var kind = "correct-notify";

            //Get size of string to fix bar
            this.textSize = title.length;

            this.setUpAlert(title,kind);
        };

        this.error = function (title) {
            title = title.trim();//Remove initial space outside string
            var kind = "incorrect-notify";

            //Get size of string to fix bar
            this.textSize = title.length;

            this.setUpAlert(title,kind);
        };

        //Configure all methods of alert
        this.setUpAlert = function(title,kind){
            //Add template with specific class to alert
            $('body').append(this.template(title, kind));
            this.showAlert(kind);

            //Remove alert after setup time
            var isVisible = setTimeout(function(){
                this.hiddeAlert(kind);
            }.bind(this),this.time_alert);

            //Remove alert when click over alert
            $('.' + kind).click(function(){
                this.hiddeAlert(kind);
                clearTimeout(isVisible);
            }.bind(this));
        }

        //Hide alert and remove element of DOM
        this.hiddeAlert = function(kind){
            //Set values of alert with object to end
            $('.' + kind).css(this.translate_end);
            $('.' + kind).addClass('animationEnd');
            var clearElement = setTimeout(function(){
                $('.' + kind).remove();
            },300)
        }

        //Show Alert
        this.showAlert = function(kind){
            //Set height of alert
            $('.' + kind).css("height",(this.textSize + 100),"opacity","1","width","20%");

            //Set values of alert with object
            $('.' + kind).css(this.translate_start);

            //Call animation css keyframes
            $('.' + kind).addClass('animationStart');
        }

        //Create templet with kind of alert
        this.template = function (title, kind) {
            return   "<div class='" + kind + " alert-notify'>" +
                        "<h2 id='title'>" + title + "</h2>" +
                     "</div>";
        }
    }
    //Instance object
    alert_tc = new Alert_tc();
})(this);
