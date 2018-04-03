"use strict"

document.addEventListener('DOMContentLoaded', function() {

    // ==== Model ===== //

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

        isAdminMode: false,
    }

    // ==== Views ===== //

    let listView = {

        list: document.querySelector('ul'),

        init: function() {
            listView.render();
        },

        render: function() {
            listView.list.innerHTML = '';
            const cats = octopus.getAllCats();
            for (let i = 0; i < cats.length; i++) {
                const listItem = document.createElement('li');
                listItem.innerText = cats[i].name;
                listView.list.appendChild(listItem);
                listItem.addEventListener('click', function() {
                    octopus.selectCat(i);
                })
            }
        }
    }

    let catView = {

        container: document.querySelector('#cat'),
        nameElement: document.querySelector('#name'),
        imageElement: document.querySelector('img'),
        clicks: document.querySelector('#counter'),

        init: function() {
            catView.imageElement.addEventListener('click', function() {
                octopus.clickOnCat();
            });
        },

        displayCat: function(cat) {
            if (!cat) {
                cat = octopus.getCurrentCat();
            }
            catView.nameElement.innerText = cat.name;
            catView.imageElement.setAttribute('src', cat.url);
            catView.imageElement.setAttribute('alt', 'Cat ' + cat.name);
            catView.clicks.innerText = cat.count;            
        },

        increaseCatsCount: function() {
            catView.clicks.innerText = octopus.getCurrentCat().count; 
        }
    }

    let adminView = {
        container: document.querySelector('#admin'),
        enterAdminModeButton: document.querySelector('#switchAdminMode'),
        adminForm: document.querySelector('#adminForm'),
        nameInput: document.querySelector('#nameInput'),
        imageInput: document.querySelector('#imgInput'),
        clicksInput: document.querySelector('#clicksInput'),
        saveButton: document.querySelector('#save'),
        cancelButton: document.querySelector('#cancel'),

        init: function() {
            adminView.adminViewOff();

            adminView.enterAdminModeButton.addEventListener('click', function(event) {
                adminView.adminViewOn();
                this.style.display = 'none';
            });

            adminView.saveButton.addEventListener('click', function(event) {
                event.preventDefault();
                octopus.updateCat({
                    name: adminView.nameInput.value,
                    url: adminView.imageInput.value,
                    clicks: adminView.clicksInput.value,
                })
            });

            adminView.cancelButton.addEventListener('click', function(event) {
                event.preventDefault();
                adminView.adminViewOff();
            });

            window.addEventListener('keydown', function(event) {
                if (event.which === 27) {
                    adminView.adminViewOff();
                }
            })
        },

        adminViewOff: function() {
            adminView.adminForm.style.display = 'none';
            adminView.enterAdminModeButton.style.display = 'block';
        },

        adminViewOn: function() {
            adminView.adminForm.style.display = 'flex';
        }
    }

    // ==== Controller ===== //

    let octopus = {
        init: function() {
            listView.init();
            catView.init();
            catView.displayCat(model.cats[0]);
            adminView.init();
        },

        getCurrentCat() {
            return model.cats[model.selected];
        },

        getAllCats() {
            return model.cats;
        },

        selectCat: function(i) {
            model.selected = i;
            catView.displayCat();
        },

        clickOnCat: function() {
            model.cats[model.selected].count++;
            catView.increaseCatsCount();
        },

        // Admin mode functionality

        isAdminMode: function() {
            return model.isAdminMode;
        },

        updateCat: function(cat) {
            let selectedCat = octopus.getCurrentCat();
            if (cat.name.length) selectedCat.name = cat.name;
            if (cat.url.length) selectedCat.url = cat.url;
            if (cat.clicks.length) selectedCat.count = cat.clicks;
            catView.displayCat();
            listView.render();
            adminView.adminViewOff();
            adminView.adminForm.reset();
        }
    }

    octopus.init();
});
