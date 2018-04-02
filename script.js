"use strict"

document.addEventListener('DOMContentLoaded', function() {

    const model = {
        cats: [
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
        ],
        
        selected: 0,
    }

    let view = {

        container: document.querySelector('.cat'),
        nameElement: document.createElement('h2'),
        imageElement: document.createElement('img'),
        clicks: document.createElement('div'),

        initList: function() {
            const list = document.querySelector('ul');
            for (let i = 0; i < model.cats.length; i++) {
                const listItem = document.createElement('li');
                listItem.innerText = model.cats[i].name;
                list.appendChild(listItem);
                listItem.addEventListener('click', function() {
                    octopus.selectCat(i);
                })
            }
        },

        initCat: function() {
            view.container.appendChild(view.nameElement);
            view.container.appendChild(view.imageElement);
            view.clicks.className = 'count';
            view.container.appendChild(view.clicks);
            view.imageElement.addEventListener('click', function() {
                octopus.clickOnCat();
            });
        },

        displayCat: function(cat) {
            view.nameElement.innerText = cat.name;
            view.imageElement.setAttribute('src', cat.url);
            view.clicks.innerText = cat.count;            
        },

        increaseCatsCount: function() {
            view.clicks.innerText = model.cats[model.selected].count; 
        }
    }

    let octopus = {
        init: function() {
            view.initList();
            view.initCat();
            view.displayCat(model.cats[0]);
        },

        selectCat: function(i) {
            model.selected = i;
            view.displayCat(model.cats[model.selected]);
        },

        clickOnCat: function() {
            model.cats[model.selected].count++;
            view.increaseCatsCount();
        }
    }

    octopus.init();
});
