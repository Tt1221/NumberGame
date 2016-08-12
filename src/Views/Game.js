/**
 * Created by Tt. on 2016/8/11.
 */
Au.Game = function(){
    //游戏玩家
    this.player = null;
    //游戏数据初始化
    this.initData = function(){
        //创建一个游戏的玩家
        var self = this;
        self.player = new Au.Struct.Player();
        var data    = Au.Tools.readLocalData(Au.Config.Save.player,null);
        if(!data){
            self.player.createPlayer();
        }else{
            self.player.initPlayer(data);
        }
    }
    //游戏循环的id
    this.loopId = null;
    //游戏逻辑初始化
    this.initGame = function(){
        var self = this;
        self.lastTime = new Date().getTime();
        self.loopId = setInterval(function(){
            self.mainLoop();
        },30);
    }
    //循环计时器
    this.lastTime = null;
    //游戏主循环逻辑
    this.mainLoop = function(){
        var self = this;
        var time = new Date().getTime();
        var subTime = time - this.lastTime;
        this.lastTime = time;
        var dt = subTime/1000;//间隔秒数
        self.player.costTime += dt;
        var add = Math.random() * (self.player.coins + 1)/100;
        add = Math.random() < self.player.crit ? add * Math.ceil(Math.random()*10) : add;
        var p1 = Math.floor(self.player.coins);
        self.player.coins += add;
        var p2 = Math.floor(self.player.coins);
        if(p2 - p1 > 0){
            console.log("恭喜你升到了"+ p2 + "级");
            console.log("花费时间"+ Math.floor(self.player.costTime));
            document.getElementById("Level").innerHTML = "Level : " + p2;
            document.getElementById("Time").innerHTML = "Time : " + Math.floor(self.player.costTime);
        }
        if(p2 >= 10000){
            console.log("恭喜你通关了!");
            console.log("花费时间"+ Math.floor(self.player.costTime));
            document.getElementById("Level").innerHTML = "Level : " + p2;
            document.getElementById("Time").innerHTML = "Time : " + Math.floor(self.player.costTime);
            clearInterval(self.loopId);
        }
    }
    //游戏执行
    this.run = function(){
        this.initData();
        this.initGame();
    }
}
Au.runGame = function(){
    var g = new Au.Game();
    g.run();
}


























