"use strict"

document.addEventListener('DOMContentLoaded', function() {
    var cats = [
        {
            name: 'Tom',
            url: 'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
            count: 0,
        },
        {
            name: 'Kitty',
            url: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image',
            count: 0,
        },
        {
            name: 'Chess',
            url: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/01/two-faced-cat-yana-28.jpg',
            count: 0,
        },
        {
            name: 'Gipsy',
            url: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
            count: 0,
        },
        {
            name: 'Snow-White',
            url: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
            count: 0,
        }
    ];

    const list = document.querySelector('ul');
    const container = document.querySelector('.cat');
    let selected = 0;

    const nameElement = document.createElement('h2');
    container.appendChild(nameElement);
    const imageElement = document.createElement('img');
    container.appendChild(imageElement);
    const clicks = document.createElement('div');
    clicks.className = 'count';
    container.appendChild(clicks);

    imageElement.addEventListener('click', function() {
        cats[selected].count++;
        clicks.innerText = cats[selected].count; 
    });

    function displayCat(i) {
        selected = i;
        nameElement.innerText = cats[i].name;
        imageElement.setAttribute('src', cats[i].url);
        clicks.innerText = cats[i].count;            
    }


    for (let i = 0; i < cats.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = cats[i].name;
        list.appendChild(listItem);
        listItem.addEventListener('click', function() {
            displayCat(i);
        })
    }

    displayCat(0);
});
