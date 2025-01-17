add()
sub()
function sub() {
    //console.log(x+y);cannot access 'x' before initialization
    let x = 40;
    var y=50;
    console.log(x+y);//90
}
function add() {
    console.log(a+b);//Nan
    var a= 20;
    var b =60;
    console.log(a+b);//70
}