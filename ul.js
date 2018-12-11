//var ul = new Phaser.Game(640, 1136, Phaser.CANVAS, 'ul', {preload: preload, create: create, update: update, render: render});

var ulState = {
    preload: function() {
        //ul.load.image('img_ticket', 'assets/ticket.png');
        //ul.load.image('img_train', 'assets/train.png');
        //ul.load.image('img_background', 'assets/background.png');
        //ul.load.image('img_home', 'assets/home.png');
        //ul.load.image('img_back', 'assets/back.png');
        //ul.load.image('img_ticket_button', 'assets/ticket_button.png');

        //ul.load.image('img_background_remove', 'assets/background_remove.png');

        ul.load.video('vid_background', 'assets/background_video.mp4')

    },

    create: function() {

        // video
        //var video;
        //video = ul.add.video('vid_background')
        //video.play(true);
        //video.addToWorld(0, 0);

        // init vars/this's
        this.home_status = false;

        var time_boot = new Date();
        this.time_15 = new Date();
        this.time_15.setHours(1);
        this.time_15.setMinutes(15-5);
        this.time_15.setSeconds(0);

        // sprites
        //this.img_home = ul.add.sprite(0, 0, 'img_home')
        //this.img_ticket_button = ul.add.sprite(12, 364, 'img_ticket_button')
        //this.addButton2(this.img_ticket_button)

        //this.img_background = ul.add.sprite(60, 192, 'img_background')
        //this.img_train = ul.add.sprite(-42-5, 316, 'img_train')
        //this.img_train.anchor.x = 0.0
        //this.img_ticket = ul.add.sprite(0, 0, 'img_ticket')

        //BUTTONBACK!!!
        //this.img_back = ul.add.sprite(26, 61, 'img_back')
        //this.addButton(this.img_back)




		// rects
		var drawnObject;
		var width = 300 // example;
		var height = 70 // example;
		var bmd = ul.add.bitmapData(width, height);
		 
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, width, height);
		bmd.ctx.fillStyle = '#ffffff';
		bmd.ctx.fill();
		drawnObject = ul.add.sprite(180, 800, bmd);
		//drawnObject.anchor.setTo(0.5, 0.5);


		var drawnObject2;
		var width2 = 300 // example;
		var height2 = 70 // example;
		var bmd2 = ul.add.bitmapData(width2, height2);
		 
		bmd2.ctx.beginPath();
		bmd2.ctx.rect(0, 0, width2, height2);
		bmd2.ctx.fillStyle = '#ffffff';
		bmd2.ctx.fill();
		drawnObject2 = ul.add.sprite(180, 1050, bmd2);
		//drawnObject.anchor.setTo(0.5, 0.5);


        // fonts
        //var font_ios = {font: '23px HelveticaNeue', fill: '#000000', align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var font_countdown = {font: '55px Roboto Medium', fill: '#000000', align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var font_valid = {font: '34px Roboto Medium', fill: '#000000', align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle'};
        this.font_countdown_mini = {font: '22px Roboto Mediumm', fill: '#000000', align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle'};

        //this.time_text_test = ul.add.text(320, 23+25+25, "2018-02-08", font_valid);

        // clock ios
        //this.time_text_hours = ul.add.text(292+12, 7+16, '', font_ios);
        //this.time_text_minutes = ul.add.text(324+13, 7+16, '', font_ios);
        //this.time_text_colon = ul.add.text(321, 21, ':', font_ios);
        //this.time_text_hours.setTextBounds(0, 0, 0, 0)
        //this.time_text_minutes.setTextBounds(0, 0, 0, 0)
        //this.time_text_colon.setTextBounds(0, 0, 0, 0)

        //var timer_ios = ul.time.create();
        //timer_ios.repeat(Phaser.Timer.SECOND, 7200, function() {this.update_time_ios(false)}, this);
        //timer_ios.start();

        // clock countdown
        
        var countdown_y = 834
        
        this.time_text_countdown11 = ul.add.text(226, countdown_y, '', font_countdown);
        this.time_text_countdown12 = ul.add.text(257, countdown_y, '', font_countdown);
        this.time_text_countdown21 = ul.add.text(305, countdown_y, '', font_countdown);
        this.time_text_countdown22 = ul.add.text(337, countdown_y, '', font_countdown);
        this.time_text_countdown31 = ul.add.text(382, countdown_y, '', font_countdown);
        this.time_text_countdown32 = ul.add.text(415, countdown_y, '', font_countdown);
        this.time_text_countdown_col1 = ul.add.text(273, 801, ':', font_countdown);
        this.time_text_countdown_col2 = ul.add.text(273+78, 801, ':', font_countdown);
        this.time_text_countdown11.setTextBounds(0, 0, 0, 0)
        this.time_text_countdown12.setTextBounds(0, 0, 0, 0)
        this.time_text_countdown21.setTextBounds(0, 0, 0, 0)
        this.time_text_countdown22.setTextBounds(0, 0, 0, 0)
        this.time_text_countdown31.setTextBounds(0, 0, 0, 0)
        this.time_text_countdown32.setTextBounds(0, 0, 0, 0)

        var timer_countdown = ul.time.create();
        timer_countdown.repeat(Phaser.Timer.SECOND, 7200, this.update_time_countdown, this);
        timer_countdown.start();

        // date and clock
        time_boot.setMinutes(time_boot.getMinutes() - 5)
        var year = time_boot.getFullYear().toString();
        var month = this.zero_pad(time_boot.getMonth().toString(), true)
        var date = this.zero_pad(time_boot.getDate().toString(), false)
        var hours = this.zero_pad(time_boot.getHours().toString(), false);
        var minutes = this.zero_pad(time_boot.getMinutes().toString(), false);

        // valid from
        //time_text_from = ul.add.text(355, 834, time_boot.getFullYear() + '-' + month + '-' + date + '   ' + this.zero_pad(time_boot.getHours()) + ':' + this.zero_pad(time_boot.getMinutes()), font_valid);
        /*
        var time_text_from11 = ul.add.text(239, 834, year[0], font_valid);
        var time_text_from12 = ul.add.text(239+18, 834, year[1], font_valid);
        var time_text_from13 = ul.add.text(239+35, 834, year[2], font_valid);
        var time_text_from14 = ul.add.text(239+53, 834, year[3], font_valid);
        var time_text_from2 = ul.add.text(306, 835, '-', font_valid);
        var time_text_from31 = ul.add.text(321, 834, month[0], font_valid);
        var time_text_from32 = ul.add.text(338, 834, month[1], font_valid);
        var time_text_from4 = ul.add.text(353, 835, '-', font_valid);
        var time_text_from51 = ul.add.text(366, 834, date[0], font_valid);
        var time_text_from52 = ul.add.text(383, 834, date[1], font_valid);
        var time_text_from61 = ul.add.text(411, 834, hours[0], font_valid);
        var time_text_from62 = ul.add.text(429, 834, hours[1], font_valid);
        var time_text_from7 = ul.add.text(444, 834, ':', font_valid);
        var time_text_from81 = ul.add.text(458, 834, minutes[0], font_valid);
        var time_text_from82 = ul.add.text(476, 834, minutes[1], font_valid);
        time_text_from11.setTextBounds(0, 0, 0, 0)
        time_text_from12.setTextBounds(0, 0, 0, 0)
        time_text_from13.setTextBounds(0, 0, 0, 0)
        time_text_from14.setTextBounds(0, 0, 0, 0)
        time_text_from2.setTextBounds(0, 0, 0, 0)
        time_text_from31.setTextBounds(0, 0, 0, 0)
        time_text_from32.setTextBounds(0, 0, 0, 0)
        time_text_from4.setTextBounds(0, 0, 0, 0)
        time_text_from51.setTextBounds(0, 0, 0, 0)
        time_text_from52.setTextBounds(0, 0, 0, 0)
        time_text_from61.setTextBounds(0, 0, 0, 0)
        time_text_from62.setTextBounds(0, 0, 0, 0)
        time_text_from7.setTextBounds(0, 0, 0, 0)
        time_text_from81.setTextBounds(0, 0, 0, 0)
        time_text_from82.setTextBounds(0, 0, 0, 0)
		*/

        // valid to
        time_boot.setMinutes(time_boot.getMinutes() + 75)
        year = time_boot.getFullYear().toString();
        month = this.zero_pad(time_boot.getMonth().toString(), true)
        date = this.zero_pad(time_boot.getDate().toString())
        hours = this.zero_pad(time_boot.getHours().toString());
        minutes = this.zero_pad(time_boot.getMinutes().toString());

		var time_text_to_y = 881+200
		
		var to_minus = 22

        var time_text_to11 = ul.add.text(239-to_minus, time_text_to_y, year[0], font_valid);
        var time_text_to12 = ul.add.text(239+18-to_minus, time_text_to_y, year[1], font_valid);
        var time_text_to13 = ul.add.text(239+35-to_minus, time_text_to_y, year[2], font_valid);
        var time_text_to14 = ul.add.text(239+53-to_minus, time_text_to_y, year[3], font_valid);
        var time_text_to2 = ul.add.text(306-to_minus, time_text_to_y, '-', font_valid);
        var time_text_to31 = ul.add.text(321-to_minus, time_text_to_y, month[0], font_valid);
        var time_text_to32 = ul.add.text(338-to_minus, time_text_to_y, month[1], font_valid);
        var time_text_to4 = ul.add.text(353-to_minus, time_text_to_y+1, '-', font_valid);
        var time_text_to51 = ul.add.text(366-to_minus, time_text_to_y, date[0], font_valid);
        var time_text_to52 = ul.add.text(383-to_minus, time_text_to_y, date[1], font_valid);
        var time_text_to61 = ul.add.text(411-to_minus, time_text_to_y, hours[0], font_valid);
        var time_text_to62 = ul.add.text(429-to_minus, time_text_to_y, hours[1], font_valid);
        var time_text_to7 = ul.add.text(444-to_minus, time_text_to_y, ':', font_valid);
        var time_text_to81 = ul.add.text(458-to_minus, time_text_to_y, minutes[0], font_valid);
        var time_text_to82 = ul.add.text(476-to_minus, time_text_to_y, minutes[1], font_valid);
        time_text_to11.setTextBounds(0, 0, 0, 0);
        time_text_to12.setTextBounds(0, 0, 0, 0);
        time_text_to13.setTextBounds(0, 0, 0, 0);
        time_text_to14.setTextBounds(0, 0, 0, 0);
        time_text_to2.setTextBounds(0, 0, 0, 0);
        time_text_to31.setTextBounds(0, 0, 0, 0);
        time_text_to32.setTextBounds(0, 0, 0, 0);
        time_text_to4.setTextBounds(0, 0, 0, 0);
        time_text_to51.setTextBounds(0, 0, 0, 0);
        time_text_to52.setTextBounds(0, 0, 0, 0);
        time_text_to61.setTextBounds(0, 0, 0, 0);
        time_text_to62.setTextBounds(0, 0, 0, 0);
        time_text_to7.setTextBounds(0, 0, 0, 0);
        time_text_to81.setTextBounds(0, 0, 0, 0);
        time_text_to82.setTextBounds(0, 0, 0, 0);
    },

    zero_pad: function(int, is_month) {
        if (int.toString().length == 1) {
            if (is_month) {
                int += 1
                return "0" + int.toString()
            } else {
                return "0" + int.toString()
            }
        } else if (int.toString().length == 2) {
            if (is_month) {
                int += 1
                return int.toString()
            } else {
                return int.toString()
            }
        } else {
            console.log('faulty data from Date()')
        }
    },

    update_time_ios: function(precise) {
        var time_boot = new Date();

        var hours = time_boot.getHours();
        var minutes = time_boot.getMinutes();
        var seconds = time_boot.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (precise) {
            this.time_text_hours.text = hours.toString();
            this.time_text_minutes.text = minutes.toString();
            this.time_text_seconds.text = seconds.toString();
            //time_string = hours + ":" + minutes + ":" + seconds;
        } else {
            this.time_text_hours.text = hours.toString();
            this.time_text_minutes.text = minutes.toString();
            //this.time_text_seconds.text = -1;
        }

        //this.time_text.text = time_string;
    },

    // merge
    update_time_countdown: function() {
        //var time2 = new Date();

        this.time_15.setSeconds(this.time_15.getSeconds() - 1)
        //console.log(time2)
        //var seconds = time2.getSeconds();

        var hours   = this.time_15.getHours();
        var minutes = this.time_15.getMinutes();
        var seconds = this.time_15.getSeconds();


        if (hours < 10) {
            hours = "0" + hours.toString();
        } else {
            hours = hours.toString();
        }
        if (minutes < 10) {
            minutes = "0" + minutes.toString();
        } else {
            minutes = minutes.toString();
        }
        if (seconds < 10) {
            seconds = "0" + seconds.toString();
        } else {
            seconds = seconds.toString();
        }

        this.time_text_countdown11.text = hours[0];
        this.time_text_countdown12.text = hours[1];

        this.time_text_countdown21.text = minutes[0];
        this.time_text_countdown22.text = minutes[1];

        this.time_text_countdown31.text = seconds[0];
        this.time_text_countdown32.text = seconds[1];
    },

    update: function() {
        /*
        //console.log(this.img_train['position']['x'])
        if (this.img_train['position']['x'] == -42-5) {
            ul.add.tween(this.img_train).to({x: 580+5}, 3500, Phaser.Easing.Sinusoidal.InOut, true);
        } else if (this.img_train['position']['x'] == 580+5) {
            ul.add.tween(this.img_train).to({x: -42-5}, 3500, Phaser.Easing.Sinusoidal.InOut, true);
        }
        */

        //nothing here?
    },

    addButton: function(obj) {
        //obj.anchor.x = 0.5
        //obj.tint = '0xFFFFFF'

        obj.inputEnabled = true

        obj.input.pixelPerfectClick = false;
		//obj.input.pixelPerfectOver = true;

        //obj.events.onInputOver.add(function() {this.rightMenuOver(obj)}, this);
		//obj.events.onInputOut.add(function() {this.rightMenuOut(obj)}, this);
        obj.events.onInputUp.add(function() {this.goHome(obj)}, this);

        //return obj
    },

    goHome: function(obj) {
        this.home_status = true
        //this.img_home.bringToTop()
        //this.time_text_hours.bringToTop();
        //this.time_text_minutes.bringToTop();
        //this.time_text_colon.bringToTop();

        //console.log(this.time_text_countdown11)


        //this.img_ticket_button.bringToTop();

        this.time_countdown_mini11 = ul.add.text(-50, -50, this.time_text_countdown11['text'], this.font_countdown_mini);
        this.time_countdown_mini12 = ul.add.text(-50, -50, this.time_text_countdown12['text'], this.font_countdown_mini);
        this.time_countdown_mini21 = ul.add.text(-50, -50, this.time_text_countdown11['text'], this.font_countdown_mini);
        this.time_countdown_mini22 = ul.add.text(-50, -50, this.time_text_countdown11['text'], this.font_countdown_mini);
        this.time_countdown_mini31 = ul.add.text(-50, -50, this.time_text_countdown11['text'], this.font_countdown_mini);
        this.time_countdown_mini32 = ul.add.text(-50, -50, this.time_text_countdown11['text'], this.font_countdown_mini);
        this.time_countdown_mini_colon1 = ul.add.text(-50, -50, ':', this.font_countdown_mini);
        this.time_countdown_mini_colon2 = ul.add.text(-50, -50, ':', this.font_countdown_mini);

    },

    /*
    addButton2: function(obj) {
        obj.inputEnabled = true
        obj.input.pixelPerfectClick = false;
        obj.events.onInputUp.add(this.goTicket, this);
    },
    */

    goTicket: function() {
        this.home_status = false
        //this.img_home.sendToBack();

        //this.img_ticket_button.sendToBack();

        this.time_countdown_mini11.destroy();
        this.time_countdown_mini12.destroy();
        this.time_countdown_mini21.destroy();
        this.time_countdown_mini22.destroy();
        this.time_countdown_mini31.destroy();
        this.time_countdown_mini32.destroy();

        this.time_countdown_mini_colon1.destroy();
        this.time_countdown_mini_colon2.destroy();
    },

    // REMOVE?
    render: function() {
		
        if (this.home_status) {
            this.time_countdown_mini11.destroy();
            this.time_countdown_mini12.destroy();
            this.time_countdown_mini21.destroy();
            this.time_countdown_mini22.destroy();
            this.time_countdown_mini31.destroy();
            this.time_countdown_mini32.destroy();
            this.time_countdown_mini_colon1.destroy();
            this.time_countdown_mini_colon2.destroy();

            this.time_countdown_mini11 = ul.add.text(53, 464, this.time_text_countdown11['text'], this.font_countdown_mini);
            this.time_countdown_mini12 = ul.add.text(65, 464, this.time_text_countdown12['text'], this.font_countdown_mini);
            this.time_countdown_mini21 = ul.add.text(83-1, 464, this.time_text_countdown21['text'], this.font_countdown_mini);
            this.time_countdown_mini22 = ul.add.text(96-1, 464, this.time_text_countdown22['text'], this.font_countdown_mini);
            this.time_countdown_mini31 = ul.add.text(113, 464, this.time_text_countdown31['text'], this.font_countdown_mini);
            this.time_countdown_mini32 = ul.add.text(126, 464, this.time_text_countdown32['text'], this.font_countdown_mini);

            this.time_countdown_mini_colon1 = ul.add.text(76, 464, ':', this.font_countdown_mini);
            this.time_countdown_mini_colon2 = ul.add.text(107, 464, ':', this.font_countdown_mini);
            
            
        }
    }
}
