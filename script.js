"use strict"

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

    function Cat(name, img) {
        this.name = name;
        this.img = img;
        this.count = 0;

        function renderName() {
            console.log(this);
            this.nameElement = document.createElement('p');
            this.nameElement.innerText = this.name;
        }

        function renderImage() {
            this.imageElement = document.createElement('img');
            this.imageElement.setAttribute('src', this.img);
        }

        function makeClickable() {
            this.clicks = document.createElement('div');
            this.clicks.innerText = this.count;
            this.clicks.className = 'count';
            const clicks = this.clicks;
            let count = this.count;
            this.imageElement.addEventListener('click', function() {
                count ++;
                clicks.innerText = count;
            });
        }

        function makeAlive() {
            this.container = document.createElement('div');
            this.renderName();
            this.renderImage();
            this.container.appendChild(this.nameElement);
            this.container.appendChild(this.imageElement);
            this.makeClickable();
            this.container.appendChild(this.clicks);
            document.body.appendChild(this.container);
        }

        this.renderName = renderName;
        this.renderImage = renderImage;
        this.makeClickable = makeClickable;
        this.makeAlive = makeAlive;
    }

    for (var i = 0; i < cats.length; i++) {
        var cat = new Cat(cats[i].name, cats[i].url);
        cat.makeAlive();
    }
});
