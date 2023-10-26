new Vue({
    el: '#app',
    data: {
        showGallery: true,
        currentImageIndex: null,
        images: [
            {
                name: 'Мона Лиза',
                author: 'Леонардо да Винчи',
                url: 'https://print4you.com.ua/upload/medialibrary/148/14811801f098c8e4af77396b1baaee90.jpg'
            },
            {
                name: 'Постоянство памяти',
                author: 'Сальвадор Дали',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/dali-1.jpg'
            },
            {
                name: 'Герника',
                author: 'Пабло Пикассо',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/pikasso-1-1024x447.jpg'
            },
            {
                name: 'Звёздная ночь',
                author: 'Винсент ван Гог',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/van-gog-1.jpg'
            },
            {
                name: 'Менины',
                author: 'Веласкес',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/Las_Meninas-1.jpg'
            },
            {
                name: 'Сикстинская Мадонна',
                author: 'Рафаэль Санти',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/Raffael_Sixtinska_madonnan-1-767x1024.jpg'
            },
            {
                name: 'Мона Лиза',
                author: 'Леонардо да Винчи',
                url: 'https://print4you.com.ua/upload/medialibrary/148/14811801f098c8e4af77396b1baaee90.jpg'
            },
            {
                name: 'Постоянство памяти',
                author: 'Сальвадор Дали',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/dali-1.jpg'
            },
            {
                name: 'Герника',
                author: 'Пабло Пикассо',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/pikasso-1-1024x447.jpg'
            },
            {
                name: 'Звёздная ночь',
                author: 'Винсент ван Гог',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/van-gog-1.jpg'
            },
            {
                name: 'Менины',
                author: 'Веласкес',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/Las_Meninas-1.jpg'
            },
            {
                name: 'Сикстинская Мадонна',
                author: 'Рафаэль Санти',
                url: 'https://lihtaryk.com.ua/wp-content/uploads/2018/03/Raffael_Sixtinska_madonnan-1-767x1024.jpg'
            },
            // Добавьте другие изображения
        ]
    },
    methods: {
        showImage(index) {
            this.currentImageIndex = index;
            this.showGallery = false;
        }
    }
});

