(function () {
    //Principal object Alert_tc
    Alert_tc = function (title) {

        this.title = title || "";
        this.sizeX = 400;
        this.sizeY = 150;

        //Changes in sizes
        this.sizeY_small = 100;
        this.sizeY_medium = 200;

        this.timeIn = 300;
        this.timeOut = 300;

/*
        var translate_start = {
            width: this.sizeX,
            opacity: 1
        };
 */

        //Modify
        var translate_start_small = {
            width: this.sizeX,
            height: this.sizeY_small,
            opacity: 1
        };


        //Modify
        var translate_start_medium = {
            width: this.sizeX,
            height: this.sizeY_medium,
            opacity: 1
        };

        var translate_end = {
            width: 0,
            opacity: 0
        };


        this.setTitle = function (title) {
            this.title = title;
        };

        this.log = function (title, position) {
            var intervalClose;
            var timeLimit = 5000;
            title = (this.title != '') ? this.title : title;

            var translate_start = (title.length > 30) ? translate_start_medium : translate_start_small;

            $('body').append(template(title, 0));
            $('.alert-notify').animate(translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };

        //Show alert when the call is correct
        this.success = function (title, position) {
            var intervalClose;
            var timeLimit = 5000;
            title = (this.title != '') ? this.title : title;

            var translate_start = (title.length > 30) ? translate_start_medium : translate_start_small;

            $('body').append(template(title, 1));
            $('.alert-notify').animate(translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };

        this.error = function (title, position) {
            var intervalClose;
            var timeLimit = 5000;
            title = (this.title != '') ? this.title : title;

            var translate_start = (title.length > 30) ? translate_start_medium : translate_start_small;

            $('body').append(template(title, 2));
            $('.alert-notify').animate(translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };





        template = function (title, kind) {
            //Select style
            var selected;
            switch (kind) {
                case 0:
                    selected = "log-notify";
                    break;
                case 1:
                    selected = "correct-notify";
                    break;
                case 2:
                    selected = "incorrect-notify";

            }

            var format = "<div class='" + selected + " alert-notify'>" +
                "<h2 id='title'>" + title + "</h2>" +
              "</div>";
            return format;
        }
    }
    alert_tc = new Alert_tc();
})(this);
