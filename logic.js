move_cloud1();
move_cloud2();
move_sun();
move_jet();
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
    setInterval(animate, 12);
    function animate() {
        change += 0.030;
        posx -= .7;
        posy = 20 + Math.cos(change) * wave_y;
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
    setInterval(animate, 12);
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
    setInterval(animate, 12);
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
    setInterval(animate, 1);
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
    setInterval(animate, 12);
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
function move_jet() {
    var jet = document.getElementById('jet_1');
    var posx = -   250;
    setInterval(animate, 10);
    function animate() {
        jet.style.left = posx + "px";
        posx += 1.7;
        if (posx >= 1600)
            posx = -250;
    }
}
function move_cloud1() {
    var cloud_element = document.getElementById('cloud1');
    var posx = 0;
    var wave_x = 150;
    var posy = 38;
    var wave_y = 0;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.062;
        posx = 260 + Math.sin(change) * wave_x;
        posy = 38 + Math.sin(change) * wave_y;
        cloud_element.style.left = posx + "px";
        cloud_element.style.top = posy + "px";
    }
}

function move_sun() {
    var sun_element = document.getElementById('sun');
    var posx = 0;
    var wave_x = 710;
    var posy = 0;
    var wave_y = 270;
    var change = 0;
    setInterval(animate, 60);
    function animate() {
        change += 0.032;
        posx = 690 + Math.cos(change) * wave_x;
        posy = 228 + Math.sin(change) * wave_y;
        sun_element.style.left = posx + "px";
        sun_element.style.top = posy + "px";
        var x = document.getElementById('sky');
        var y = document.getElementById('water')
        var a = document.getElementById('cloud1');
        var b = document.getElementById('cloud2');
        if (posy > 280) {
            x.src = "images/dark_back.jpg";
            a.src = "images/dark_clouds.png";
            b.src = "images/dark_clouds.png";
            y.src = "images/dark_water.jpeg";
        }
        else {
            a.src = "images/cloud_samp.png";
            b.src = "images/cloud_samp.png";
            y.src = "images/under_water.jpg";
            x.src = "images/back_groung.jpg";

        }
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
        change += 0.062;
        posx = 910 + Math.sin(change) * wave_x;
        posy = 45 + Math.sin(change) * wave_y;
        cloud_element.style.left = posx + "px";
        cloud_element.style.top = posy + "px";
    }
}

