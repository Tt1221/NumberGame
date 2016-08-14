/**
 * Created by Tt. on 2016/8/11.
 */
(function(tool){
    tool.print = function(msg,msg2){
        if(msg instanceof Array ){
            msg.forEach(tool.print);
        }else if(msg instanceof Object){
            for(var idx in msg){
                if(typeof msg[idx] === "function")continue;
                tool.print(idx,msg[idx]);
            }
        }else if(typeof msg === "function"){

        }else if(msg2 || msg2 == 0 ){
            console.log(msg+ "  " +msg2);
        }else{
            console.log(msg);
        }
    }

    //存档
    tool.saveLocalData = function(key,data){
        var saveString = JSON.stringify(data);
        window.localStorage.setItem(key,saveString);
    }
    //读档
    tool.readLocalData = function(key,defaultData){
        var value = window.localStorage.getItem(key);
        return (value == "" || value == undefined || value == null) ? defaultData : JSON.parse(value);
    }

    tool.Log = tool.Log || {};
    tool.Log.isDebug = true;
    tool.Log.debug = function(msg){
        if(!tool.Log.isDebug)return;
        console.log("%c  " + msg,"color: green;");
    }
    tool.Log.info = function(msg){
        console.info(msg);
    }
    tool.Log.warn = function(msg){
        console.warn("%c" + msg,"color: yellow;");
    }
    tool.Log.error = function(msg){
        console.error(msg);
    }

}(Au.Tools));