var bootState = {
	create: function() {
    	ul.input.maxPointers = 1;
    	ul.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	//game.scale.pageAlignHorizontally = true;
    	//game.scale.pageAlignVertically = true;
        //game.scale.updateLayout(true); // ????????????
        //game.stage.disableVisibilityChange = true;

        // font load hack
        //this.game.add.text(0, 0, "hack", {font:"1px HelveticaNeue", fill:"#FFFFFF"});
        //this.game.add.text(0, 0, "hack", {font:"1px Coolvetica", fill:"#FFFFFF"});
        //this.game.add.text(0, 0, "hack", {font:"1px roboto-mediumm", fill:"#FFFFFF"});
        //this.game.add.text(0, 0, "hack", {font:"1px Roboto-Medium", fill:"#FFFFFF"});

		ul.state.start('ul');
	}
};
