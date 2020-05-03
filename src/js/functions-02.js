function holo(){
    var array = ['gato', 'girafa', 'leon', 'doggo']
    Array.prototype.forEach.call(array, function(el, i){
        console.log('el');
    });
}
holo();