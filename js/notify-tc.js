(function () {
    //Principal object Alert_tc
    Alert_tc = function (title) {

        this.title = title || "";
        this.sizeX = 400;
        this.sizeY = 150;

        //Changes in sizes
        this.sizeY_small = 120;
        this.sizeY_medium = 250;

        this.timeIn = 300;
        this.timeOut = 300;

        //Modify
        this.translate_start = {
            width: this.sizeX,
            height: this.sizeY_small,
            opacity: 1
        };

        this.translate_end = {
            width: 0,
            opacity: 0
        };

        this.setTitle = function (title) {
            this.title = title;
        };

        this.log = function (title, position) {
            title = title.trim();//Remove initial space outside string
            var intervalClose;
            var textSize = title.length;
            var timeLimit = 5000;

            title = (this.title != '') ? this.title : title;
            this.translate_start.height = textSize + 100;

            $('body').append(template(title, 0));
            $('.alert-notify').animate(this.translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };

        //Show alert when the call is correct
        this.success = function (title, position) {
            title = title.trim();//Remove initial space outside string
            var intervalClose;
            var textSize = title.length;

            var timeLimit = 5000;
            title = (this.title != '') ? this.title : title;
            this.translate_start.height = textSize + 100;

            $('body').append(template(title, 1));
            $('.alert-notify').animate(this.translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };

        this.error = function (title, position) {
            title = title.trim();//Remove initial space outside string
            var intervalClose;
            var textSize = title.length;

            var timeLimit = 5000;
            title = (this.title != '') ? this.title : title;
            this.translate_start.height = textSize + 100;

            $('body').append(template(title, 2));
            $('.alert-notify').animate(this.translate_start, this.timeIn, function () {

                intervalClose = window.setTimeout(function () {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {
                        //Eliminate element
                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                }, timeLimit);


                $(".alert-notify").click(function (e) {

                    $('.alert-notify').animate(this.translate_end, this.timeOut, function () {

                        $('.alert-notify').remove();
                        window.clearTimeout(intervalClose);
                    })
                });
            });
        };

        /*
         * Select kind of alert
         */
        template = function (title, kind) {
            var selected;//Result of selection
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
