document.addEventListener('DOMContentLoaded', function() {
    var cats = [
        {
            name: 'Tom',
            url: 'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'
        },
        {
            name: 'Kitty',
            url: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image'
        }
    ];

    for (var i = 0; i < cats.length; i++) {
        let counter = 0;
        const cat = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', cats[i].url);
        const name = document.createElement('p');
        name.innerText = cats[i].name;
        cat.appendChild(name);
        cat.appendChild(img);
        const clicks = document.createElement('div');
        clicks.innerText = counter;
        clicks.className = 'count';
        cat.appendChild(clicks);

        document.body.appendChild(cat);

        img.addEventListener('click', function() {
            console.log('click');
            counter ++;
            clicks.innerText = counter;
        });
    }
});
