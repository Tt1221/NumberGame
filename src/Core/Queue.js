/**
 * Created by Tt. on 2016/8/14.
 */
/**
 * 所有事件通过队列来进行。
 * 所有事件完成后回调进入队列。
 * 开始执行下一个事件。
 * 作用----
 * 1.动画事件和非及时性事件均可以通过此方式按顺序执行。
 * 2.所有大的块均可以使用一个统一的回调方式，在完成后进行回调。
 *
 * 造成问题---
 * 1.实际的作用价值问题。
 * 2.事件的紊乱问题。
 * 3.所有事件是否能正确的回调回来。
 *
 * */
Au.Queue = function(){
    this.dataStore = [];
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element);
    };
    this.dequeue = function dequeue() {
        return this.dataStore.shift();
    };
    this.front = function front() {
        return this.dataStore[0];
    };
    this.back = function back() {
        return this.dataStore[this.dataStore.length-1];
    };
    this.toString = function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };
    this.empty = function empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    this.clear = function clear(){
        this.dataStore.length = 0;
    };
}
