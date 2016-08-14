/**
 * Created by Tt. on 2016/8/14.
 */
Au.KeyEvent.list = function(){
    this.key_49 = {
        function : Au.g.atk_1
    }
    this.key_50 = {
        function : Au.g.test
    }
    this.key_51 = {
        function: Au.g.test
    }
}
Au.KeyEvent.init = function(){
    var list = new Au.KeyEvent.list();
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(!e){
            Au.Tools.Log.debug("can't find event!-keyEvent.js");
            return;
        }
        var keyCode = e.keyCode;
        var key = list["key_"+keyCode];
        if(!key)return;
        key.function.call(Au.g);
    };
}









