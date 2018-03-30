document.addEventListener('DOMContentLoaded', function() {
    var count = document.getElementById('count');
    var img = document.querySelector('img');
    var counter = 0;
    img.addEventListener('click', function() {
        counter ++;
        count.innerText = counter;
    });
});
