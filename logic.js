console.log("hello");
var a = document.getElementById('sun').style.top;
console.log(a);
move_cloud1();

move_cloud2();
move_sun();
function move_sun() {
    var sun_element = document.getElementById('sun');
    var posx = 0;
    var wave_x = 710;
    var posy = 0;
    var wave_y = 270;
    var change = 0;
    setInterval(animate, 70);
    function animate() {
        change += 0.032;
        posx = 690 + Math.cos(change) * wave_x;
        posy = 228 + Math.sin(change) * wave_y;
        sun_element.style.left = posx + "px";
        sun_element.style.top = posy + "px";
    }
}
function move_cloud1() {
    var cloud_element = document.getElementById('cloud1');
    var posx = 0;
    var wave_x = 150;
    var posy = 0;
    var wave_y = 0;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.032;
        posx = 260 + Math.sin(change) * wave_x;
        posy = 38 + Math.sin(change) * wave_y;
        cloud_element.style.left = posx + "px";
        cloud_element.style.top = posy + "px";
    }
}
function move_cloud2() {
    var cloud_element = document.getElementById('cloud2');
    var posx = 0;
    var wave_x = -150;
    var posy = 0;
    var wave_y = 0;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.032;
        posx = 910 + Math.sin(change) * wave_x;
        posy = 45 + Math.sin(change) * wave_y;
        cloud_element.style.left = posx + "px";
        cloud_element.style.top = posy + "px";
    }
}


