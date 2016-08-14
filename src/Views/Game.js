/**
 * Created by Tt. on 2016/8/11.
 */
/**
 * 游戏对象
 * */
Au.g = Au.g || {};
Au.Game = function(){
    var Log = Au.Tools.Log;
    /**
     * 游戏玩家
     *
     * @param {Au.Struct.Player} 主角
     *
     * */
    this.player = null;
    /**
     * 游戏怪物列表
     *
     * @param {Au.Struct.MonsterCtrl} 场景怪物列表
     *
     * */
    this.monsterCtrl = null;
    /**
     * 游戏数据初始化
     * */
    this.initData = function(){
        var self = this;
        //初始化游戏玩家
        self.player = new Au.Struct.Player();
        self.player.create();
        //初始化怪物列表
        self.monsterCtrl = new Au.Struct.MonsterCtrl();

    }
    /**
     * 游戏逻辑初始化
     * */
    //游戏循环的id
    this.loopId = null;
    this.initGame = function(){
        var self = this;
        //创建键盘监听
        this.initEvent();
        //创建主循环
        self.lastTime = new Date().getTime();
        self.loopId = setInterval(function(){
            self.mainLoop();
        },30);
    }
    /**
     * 游戏操作初始化
     * */
    this.initEvent = function(){
        Au.KeyEvent.init();
    }
    this.test = function(){
        Log.debug("saflsakdj"+Math.random());
    }
    /**
     * 游戏主循环逻辑
     * */
    //循环计时器
    this.lastTime = null;
    this.mainLoop = function(){
        var self = this;
        var dt = self.mainLoopTime();
        this.monsterGenerator();
    }
    this.mainLoopTime = function(){
        var self = this;
        var time = new Date().getTime();
        var subTime = time - self.lastTime;
        self.lastTime = time;
        return subTime/1000;//间隔秒数
    }
    /**
     * 游戏功能
     * */
    /**
     * 发动攻击
     * */
    this.atk_1 = function(){
        //单体普通伤害，默认攻击第一个敌人
        var monster = this.monsterCtrl.front();
        if(!monster){
            Log.debug("怪物已全部死亡");
            this.monsterCtrl.show();
            return;
        }
        //计算伤害
        var atk = Math.random() < this.player.crit ? this.player.damage*2 : this.player.damage;
        //怪物受到伤害
        monster.beHurt(atk);
        //检测怪物是否死亡
        if(monster.isDeath()){
            this.monsterDeath(monster);
            this.monsterCtrl.remove(monster);
        }
    }

    /**
     * 自动增加金币
     *
     * @param {Number} 每个循环花费的时间
     *
     * */
    this.AuCoinsAdd = function(dt){
        var self = this;
        self.player.costTime += dt;
        var add = Math.random() * (self.player.coin + 1)/100;
        add = Math.random() < self.player.crit ? add * Math.ceil(Math.random()*10) : add;
        var p1 = Math.floor(self.player.coin);
        self.player.coin += add;
        var p2 = Math.floor(self.player.coin);
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
    /**
     * 怪物产出
     *
     * @return {Au.Struct.Monster} 创造的怪物
     *
     * */
    //怪物产生冷却时间
    this.monsterCreateCD = null;
    this.monsterGenerator = function(){
        var self = this;
        //创造CD控制
        var time = new Date().getTime();
        if(!self.monsterCreateCD)self.monsterCreateCD = time;
        if(time - self.monsterCreateCD < Au.Config.Monster.CREATE_CD)return;
        self.monsterCreateCD = time;
        //创造怪物
        this.monsterCtrl.create();
        this.monsterCtrl.show();
    }
    /**
     * 怪物死亡 物品回收
     *
     * @param {Au.Struct.Monster} 怪物的数据
     *
     * */
    this.monsterDeath = function(monster){
        var self = this;
        self.player.addExp(monster.exp);
        self.player.addCoin(monster.coin);
        Log.debug(monster.name + "已死亡！"+ "玩家获取coin："+ monster.coin + "/exp："+monster.exp);
        Log.debug("玩家当前Coin:"+self.player.coin + "/Exp:" + self.player.exp);
    }
    /**
     * 游戏执行
     * */
    this.run = function(){
        this.initData();
        this.initGame();
    }
}
Au.runGame = function(){
    Au.g = new Au.Game();
    Au.g.run();
}


























