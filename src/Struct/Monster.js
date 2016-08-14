/**
 * Created by Tt. on 2016/8/12.
 */
Au.Struct.Monster = Au.Struct.Monster || {};
Au.Struct.MonsterCtrl = Au.Struct.MonsterCtrl || {};
(function(){
    var Monster = function(){
        this.id         = 0 ;//用户id
        this.name       = "";//用户名称
        this.hp         = 0 ;//血量
        this.exp        = 0 ;//经验产出
        this.coin       = 0 ;//金币产出
        this.death      = false;//是否死亡
        this.init = function(data){
            this.id    = data.id  ;
            this.name  = data.name;
            this.hp    = data.hp  ;
            this.exp   = data.exp ;
            this.coin  = data.coin;
            this.death = false;
        }
        this.beHurt = function(damage){
            this.hp -= damage;
            if(this.hp <= 0){
                this.death = true;
            }
        }
        this.isDeath = function(){
            return this.death;
        }
    }
    Au.Struct.Monster = Monster;
}(Au.Struct.Monster));
(function(){
    var Log = Au.Tools.Log;
    var contorol = function() {
        this.dataStore = [];
        this.front = function(){
            return this.dataStore[0];
        };
        this.remove = function(data){
            for(var i = 0 ; i < this.dataStore.length;i++){
                if(data.id == this.dataStore[i].id){
                    this.dataStore.splice(i,1);
                    break;
                }
            }
        };
        this.show = function(){
            this.dataStore.forEach(function(monster,i){
                Log.debug(i + " : " + monster.name + "  HP:" + monster.hp);
            });
        }
        this.create = function(){
            var monster = new Au.Struct.Monster();
            monster.id = 10000 + Math.floor(Math.random()*1000);
            monster.name = "monster"+monster.id;
            monster.hp   = Math.ceil(Math.random()*100) + 30;
            monster.exp  = Math.ceil(Math.random()*monster.hp) + 10;
            monster.coin = Math.ceil(Math.random()*monster.hp);
            monster.death = false;
            console.log(monster.name + "出现了"+ "   "+"HP:"+monster.hp + "/" + "Exp:" + monster.exp + "/" + "Coin:" + monster.coin);
            this.dataStore.push(monster);
            return monster;
        }
    }
    Au.Struct.MonsterCtrl = contorol;
}(Au.Struct.MonsterCtrl));

