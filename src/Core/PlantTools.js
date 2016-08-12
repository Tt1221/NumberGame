/**
 * Created by Tt. on 2016/8/11.
 */
(function(tool){



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

}(Au.Tools));