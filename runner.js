var runner = {};

runner.BootState = function() {
}

runner.PreloadState = function() {
}

runner.LaunchState = function() {
}

runner.GameState = function() {
	this.hero = null;
}

runner.GameState.prototype.preload = function() {
	this.load.image('ground', 'assets/ground.png');
	this.load.image('player', 'assets/player.png');
	this.load.image('bar', 'assets/powerbar.png');
	this.load.image('block', 'assets/image.png');
}

runner.GameState.prototype.create = function() {
	this.stage.backgroundColor = "#999999";	

	this.power = 0;

	var ground = this.add.sprite(0, game.height - 10, 'ground');
	this.hero = this.add.sprite(game.width * 0.2, ground.y - 100, 'player');
	this.powerBar = this.add.sprite(this.hero.x + 25, this.hero.y - 25, 'bar');
	//this.powerBar.width = 0;
}


runner.LostState = function() {
}

runner.WinState = function() {
}


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'runner');

//game.state.add('boot', runner.BootState);
//game.state.add('preload', runner.PreloadState);
//game.state.add('launch', runner.LaunchState);
game.state.add('game', runner.GameState);
//game.state.add('lost', runner.LostState);
//game.state.add('win', runner.WinState);

game.state.start('game');
