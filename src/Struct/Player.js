/**
 * Created by Tt. on 2016/8/11.
 */
//玩家数据结构
Au.Struct.Player = Au.Struct.Player || {};
Au.Struct.Player = function(){
    this.id = 0;//用户id
    this.name = "";//用户名称
    this.coins = 0;//玩家金币
    this.costTime = 0;//花费时间
    this.crit = 0;
    this.initPlayer = function(data){
        var self = this;
        self.id = data.id;
        self.name = data.name;
        self.coins = data.coins;
        self.costTime = data.costTime;
        self.crit = data.crit;
    }
    this.createPlayer = function(){
        var self = this;
        self.id = 10000 + Math.floor(Math.random()*100);
        self.name = "T";
        self.coins = 0;
        self.costTime = 0;
        self.crit = 0.3;
    }
}

