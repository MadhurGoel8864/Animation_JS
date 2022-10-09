var current1 = false;
var sky_sound = document.getElementById('sky_container');
sky_sound.addEventListener("click", playsound1);
var aud = new Audio('audios/wind_sound.mp3');
function playsound1() {
    if (current1 == false) {
        current1 = true;
    }
    else {
        current1 = false;
    }
    if (current1 == true) {
        aud.play();
    }
    else {
        aud.pause();
    }
}

var current2 = false;
var sound_water = document.getElementById('water_conatiner');
sound_water.addEventListener("click", playsound2);
var audios = new Audio('audios/water_sound.mp3');
function playsound2() {
    if (current2 == false) {
        current2 = true;
    }
    else {
        current2 = false;
    }
    if (current2 == true) {
        audios.play();
    }
    else {
        audios.pause();
    }
}
let jet_plane = document.getElementById("jet_1");
let movement = 8;
window.addEventListener('load', () => {
    jet_plane.style.position = 'absolute';
    jet_plane.style.left = '250px';
    jet_plane.style.top = '120px';
})
var change = 0;
window.addEventListener('keydown', (x) => {

    switch (x.key) {
        case 'ArrowLeft':
            jet_plane.style.left = parseInt(jet_plane.style.left) - movement + "px";

            break;
        case 'a':
            jet_plane.style.left = parseInt(jet_plane.style.left) - movement + "px";
            break;
        case 'ArrowRight':

            var posy;
            var wave_y = 25;
            change += 0.2;
            posy = Math.sin(change) * wave_y;
            if (posy > 0) {
                jet_plane.style.left = parseInt(jet_plane.style.left) + movement + "px";
            }
            else {
                // jet_plane.style.top = parseInt(jet_plane.style.top) + posy + "px";

                jet_plane.style.left = parseInt(jet_plane.style.left) + movement + "px";
            }
            jet_plane.style.top = parseInt(jet_plane.style.top) + posy + "px";
            // jet_plane.style.top = parseInt(jet_plane.style.top) - posy + "px";


            break;
        case 'd':
            jet_plane.style.left = parseInt(jet_plane.style.left) + movement + "px";
            break;
        case 'ArrowUp':
            jet_plane.style.top = parseInt(jet_plane.style.top) - movement + "px";
            break;
        case 'w':
            jet_plane.style.top = parseInt(jet_plane.style.top) - movement + "px";
            break;
        case 'ArrowDown':
            jet_plane.style.top = parseInt(jet_plane.style.top) + movement + "px";
            break;
        case 's':
            jet_plane.style.top = parseInt(jet_plane.style.top) + movement + "px";
            break;

        default:
            break;
    }
})
move_cloud1();
move_cloud2();
move_sun();
move_plane1();
move_plane2();
move_fish1();
move_fish2();
move_fish3();
move_fish4();
move_fish5();
move_fish6();
move_fish7();
function move_fish6() {
    var fish = document.getElementById('fish6');
    var posx = 660;
    var posy;
    var wave_y = 16;
    var change = 0;
    var stop_fish_6 = setInterval(animate, 20);
    function animate() {
        posx -= .7;
        if (posx <= -150)
            posx = 1550;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_fish5() {
    var fish = document.getElementById('fish5');
    var posx = 260;
    var posy;
    var wave_y = 26;
    var change = 0;
    setInterval(animate, 25);
    function animate() {
        change += 0.030;
        posx -= 1.3;
        posy = 110 + Math.sin(change) * wave_y;
        if (posx <= -150)
            posx = 1550;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_fish4() {
    var fish = document.getElementById('fish4');
    var posx = 50;
    var posy;
    var wave_y = 8;
    var change = 0;
    setInterval(animate, 13);
    function animate() {
        change += 0.050;
        posx -= 1;
        posy = 240 + Math.sin(change) * wave_y;
        if (posx <= -150)
            posx = 1550;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
move_submarine();
var direction = 1;
function move_submarine() {
    var submarine = document.getElementById('submarine');
    var posx = -250;
    setInterval(animate, 6);
    function animate() {
        submarine.style.left = posx + "px";
        if (posx >= -250 && posx <= 1600 && direction == 1) {
            submarine.src = "images/submarine.png";
            posx += 1;
            if (posx >= 1600)
                direction = -1;
        }
        else if (posx >= -250 && posx <= 1600 && direction == -1) {
            submarine.src = "images/sub.png";
            posx -= 1;
            if (posx <= -250)
                direction = 1;
        }
    }
}
function move_fish7() {
    var fish = document.getElementById('fish7');
    var posx = 50;
    var posy;
    var wave_y = 16;
    var change = 0;
    setInterval(animate, 26);
    function animate() {
        change += 0.050;
        posx += 1;
        posy = 240 + Math.sin(change) * wave_y;
        if (posx >= 1550)
            posx = -150;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_fish3() {
    var fish = document.getElementById('fish3');
    var posx = 950;
    var posy;
    var wave_y = 8;
    var change = 0;
    setInterval(animate, 14);
    function animate() {
        change += 0.050;
        posx += 1;
        posy = 240 + Math.sin(change) * wave_y;
        if (posx >= 1550)
            posx = -150;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_fish2() {
    var fish = document.getElementById('fish2');
    var posx = 350;
    var posy;
    var wave_y = 12;
    var change = 0;
    setInterval(animate, 15);
    function animate() {
        change += 0.050;
        posx += 1;
        posy = 158 + Math.cos(change) * wave_y;
        if (posx >= 1550)
            posx = -150;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_fish1() {
    var fish = document.getElementById('fish1');
    var posx = 150;
    var posy;
    var wave_y = 17;
    var change = 0;
    setInterval(animate, 15);
    function animate() {
        change += 0.040;
        posx += 1.5;
        posy = 38 + Math.sin(change) * wave_y;
        if (posx >= 1550)
            posx = -150;
        fish.style.left = posx + "px";
        fish.style.top = posy + "px";
    }
}
function move_plane1() {
    var jet = document.getElementById('heli_1');
    var posx = 1700;
    setInterval(animate, 10);
    function animate() {
        jet.style.left = posx + "px";
        posx -= 1.3;
        if (posx <= -250)
            posx = 1600;
    }
}

function move_plane2() {
    var jet = document.getElementById('heli_2');
    var posx = 600;
    setInterval(animate, 10);
    function animate() {
        jet.style.left = posx + "px";
        posx -= 1.0;
        if (posx <= -250)
            posx = 1450;
    }
}

function move_cloud1() {
    var cloud_element = document.getElementById('cloud1');
    var posx = 0;
    var wave_x = 150;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.062;
        posx = 260 + Math.sin(change) * wave_x;
        cloud_element.style.left = posx + "px";
    }
}

function move_sun() {
    var sun_element = document.getElementById('sun');
    var posx = 0;
    var wave_x = 690;
    var posy = 0;
    var wave_y = 340;
    var change = 4.7;
    setInterval(animate, 60);
    function animate() {
        change += 0.012;
        posx = 660 + Math.cos(change) * wave_x;
        posy = 300 + Math.sin(change) * wave_y;
        sun_element.style.left = posx + "px";
        sun_element.style.top = posy + "px";
        var x = document.getElementById('sky');
        var y = document.getElementById('water')
        var a = document.getElementById('cloud1');
        var b = document.getElementById('cloud2');
        if (posy > 280) {
            x.style.backgroundImage = 'url(images/dark_back.jpg)';
            y.style.backgroundImage = 'url(images/dark_water.jpeg)';
            a.src = "images/dark_clouds.png";
            b.src = "images/dark_clouds.png";
        }
        else {
            a.src = "images/cloud_samp.png";
            b.src = "images/cloud_samp.png";
            y.style.backgroundImage = 'url(images/under_water.jpg)';
            x.style.backgroundImage = 'url(images/back_groung.jpg)';

        }
    }
}
function move_cloud2() {
    var cloud_element = document.getElementById('cloud2');
    var posx = 0;
    var wave_x = -150;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.062;
        posx = 910 + Math.sin(change) * wave_x;
        cloud_element.style.left = posx + "px";
    }
}