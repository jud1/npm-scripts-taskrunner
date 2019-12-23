function test(){
    var array = [2,3,4,5]
    Array.prototype.forEach.call(array, function(el, i){
        console.log(el);
    });
}
test();