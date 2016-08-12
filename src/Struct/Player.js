/**
 * Created by Tt. on 2016/8/11.
 */
//玩家数据结构
Au.Struct.Player = Au.Struct.Player || {};
Au.Struct.Player = function(){
    this.id         = 0 ;//用户id
    this.name       = "";//用户名称
    this.coin       = 0 ;//玩家金币
    this.costTime   = 0 ;//花费时间
    this.damage     = 0 ;//基础攻击力
    this.crit       = 0 ;//基础暴击率
    /**
     * 初始化玩家数据
     * @param {Object} data
     */
    this.init = function(data){
        var self    = this;
        self.id     = data.id;
        self.name   = data.name;
        self.coin   = data.coin;
        self.costTime = data.costTime;
        self.crit   = data.crit;
        self.damage = data.damage;
    }
    /**
     * 创造一个新的玩家
     */
    this.create = function(){
        var self    = this;
        self.id     = 10000 + Math.floor(Math.random()*100);
        self.name   = "T";
        self.coin   = 0;
        self.costTime = 0;
        self.crit   = 0.3;
        self.damage = 10;
        console.log(self.name + "出生了");
    }

    /**
     * 玩家经验增加
     *
     * @param {Number} exp
     *
     */
    this.addExp = function(exp){
        this.exp += exp;
    }

    /**
     * 玩家金钱增加
     *
     * @param {Number} coin
     *
     */
    this.addCoin = function(coin){
        this.coin += coin;
    }
}




//1-自动攻击 每次点击进行触发/CD=1s

//2-特殊攻击 每次点击进行触发/CD=2s

//3-组合攻击 组合指令进行攻击--同样的字符攻击会有/CD=60

//4-奖励攻击 输入界面显示的指令进行攻击

//怪物系统--玩家使用技能去打击怪物

//金钱产出--技能升级

//经验产出--人物升级

//地图系统--

//技能系统--

//


//不同的技能 不同的效果

//监听玩家的键盘事件进行变化



