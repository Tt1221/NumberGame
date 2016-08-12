/**
 * Created by Tt. on 2016/8/12.
 */
Au.Struct.Monster = Au.Struct.Monster || {};
Au.Struct.Monster = function(){
    this.id         = 0 ;//用户id
    this.name       = "";//用户名称
    this.hp         = 0 ;//血量
    this.exp        = 0 ;//经验产出
    this.coin       = 0 ;//金币产出
    this.init = function(data){
    }
    this.create = function(){
        this.id = 10000 + Math.floor(Math.random()*10);
        this.name = "monster"+this.id;
        this.hp   = Math.ceil(Math.random()*100)      + 30;
        this.exp  = Math.ceil(Math.random()*this.hp)  + 10;
        this.coin = Math.ceil(Math.random()*this.hp);
        console.log(this.name + "出现了"+ "   "+"HP:"+this.hp + "/" + "Exp:" + this.exp + "/" + "Coin:" + this.coin);
    }
}

















