const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const main_video_link = document.querySelector('.main-video .link');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'اعاده الاستخدام , اعاده التدوير , التقليل',
        'name': 'the-three-rs-reduce-reuse-and-recycle-happy-learning_uMIODQkv.mp4',
        'duration': '03:39',
        'link': 'https://www.youtube.com/watch?v=OasbYWF4_S8&t=6s',
    },
    {
        'id': 'a2',
        'title': 'تلوث الهواء',
        'name': 'air-pollution-video-for-kids-causes-effects-solution_GpIJVig5.mp4',
        'duration': '02:57',
        'link':'https://www.youtube.com/watch?v=t7Q7y_xjR5E&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE'

    },
    {
        'id': 'a3',
        'title': 'تلوث المياه',
        'name': 'water-pollution-water-contamination-video-for-kids_zWUM5d5K.mp4',
        'duration': '02:35',
         'link':'https://www.youtube.com/watch?v=Om42Lppkd9w&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE'
    },

    {
        'id': 'a4',
        'title': 'تغير المناخ',
        'name': 'climate-change-for-kids-video-global-warming-learning-videos-for-kids_l324ecr6.mp4',
        'duration': '05:45',
        'link':'https://www.youtube.com/watch?v=tykLKCT7DyY'
    },
    {
        'id': 'a5',
        'title': 'كيفيه صنع عمله معدنيه',
        'name': 'How To Make Coin Bank Box From Cardboard _ Awesome Cardboard Projects.mp4',
        'duration': '02:40',
         'link':'https://www.youtube.com/watch?v=oRg7eeivC4k'
    },
    {
        'id': 'a6',
        'title': 'حامل مفاتيح جميل',
        'name': 'Beautiful Key Stand Ideas _ How to Make Key Holder with Waste Paper.mp4',
        'duration': '08:31',
         'link':'https://www.youtube.com/watch?v=x76VGDzbCmM&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE'
    },
    {
        'id': 'a7',
        'title': 'افضل ميني داستن',
        'name': 'Best Mini Dustin made from paper cup , how to make desk organizer , how to make dustbin.mp4',
        'duration': '02:53',
         'link':'https://www.youtube.com/watch?v=M3TOKTHYc3g&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE'
    },

    {
        'id': 'a8',
        'title': 'صنع منظم سطح المكتب',
        'name': 'DIY - Making Desktop Organizer with  Waste Paper - Pen Holder Organizer - Paper Crafts.mp4',
        'duration': '08:03',
         'link':'https://www.youtube.com/watch?v=GC7xMulhq7c'
    },
    {
        'id': 'a9',
        'title': 'علبه قلم رصاص مع زجاجه الماء',
        'name': 'DIY Pencil box with water bottle __ How to make cute pencil box from water bottle.mp4',
        'duration': '02:08',
         'link':'https://www.youtube.com/watch?v=MMxn5Vh1hHo&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE'
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <div class='img'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg> </div>
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time"></p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('.img').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"/></svg>';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('.img').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg>';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('.img').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"/></svg>';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_link.href = match_video.link;
        main_video_title.innerHTML = match_video.title;
    }
})