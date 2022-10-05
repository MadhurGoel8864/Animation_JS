back_change();
function back_change() {
    var x = document.getElementById('back');
    setInterval(animate, 3000);
    function animate() {
        x.src = "js project/images/dark_back.jpg";
    }
}