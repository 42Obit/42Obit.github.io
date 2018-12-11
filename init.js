var ul = new Phaser.Game(640, 1136-40, Phaser.CANVAS, 'gameDiv');

ul.state.add('boot', bootState);
ul.state.add('ul', ulState);

ul.state.start('boot');
