const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const main_video_link = document.querySelector('.main-video .link');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Reduce Reuse Recycle',
        'name': 'The three Rs_ Reduce, Reuse, and Recycle _ Happy Learning ♻️ ♻️ ♻️.mp4',
        'duration': '03:39',
        'link': 'https://www.youtube.com/watch?v=OasbYWF4_S8&t=6s',
        'embed': 'https://www.youtube.com/embed/OasbYWF4_S8?si=DdmiyIFzkQtO4-UG',
    },
    {
        'id': 'a2',
        'title': 'Air Pollution',
        'name': 'Air Pollution _ Video for Kids _ Causes, Effects & Solution.mp4',
        'duration': '02:57',
        'link':'https://www.youtube.com/watch?v=t7Q7y_xjR5E&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE',
        'embed': 'https://www.youtube.com/embed/t7Q7y_xjR5E?si=MdnLvFVTT1iG13mC',
    },
    {
        'id': 'a3',
        'title': 'Water Pollution',
        'name': 'Water pollution _ Water Contamination _ Video for kids.mp4',
        'duration': '02:35',
         'link':'https://www.youtube.com/watch?v=Om42Lppkd9w&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE',
         'embed': 'https://www.youtube.com/embed/Om42Lppkd9w?si=i44UxeCz2i6Ns_v-'
    },

    {
        'id': 'a4',
        'title': 'Climate Change',
        'name': 'Climate Change for Kids Video - Global Warming  (Learning Videos For Kids).mp4',
        'duration': '05:45',
        'link':'https://www.youtube.com/watch?v=tykLKCT7DyY',
        'embed': 'https://www.youtube.com/embed/tykLKCT7DyY?si=m56Co6IMl0XsZT6i'

    },
    {
        'id': 'a5',
        'title': 'How To Make Coin',
        'name': 'How To Make Coin Bank Box From Cardboard _ Awesome Cardboard Projects.mp4',
        'duration': '02:40',
         'link':'https://www.youtube.com/watch?v=oRg7eeivC4k',
         'embed': 'https://www.youtube.com/embed/oRg7eeivC4k?si=eUwWlz4ECgyi8nwT'

    },
    {
        'id': 'a6',
        'title': 'Beautiful Key Stand',
        'name': 'Beautiful Key Stand Ideas _ How to Make Key Holder with Waste Paper.mp4',
        'duration': '08:31',
         'link':'https://www.youtube.com/watch?v=x76VGDzbCmM&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE',
         'embed': 'https://www.youtube.com/embed/x76VGDzbCmM?si=UHvfAh30kVhZ30aE'

    },
    {
        'id': 'a7',
        'title': 'Best Mini Dustin',
        'name': 'Best Mini Dustin made from paper cup , how to make desk organizer , how to make dustbin.mp4',
        'duration': '02:53',
         'link':'https://www.youtube.com/watch?v=M3TOKTHYc3g&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE',
         'embed': 'https://www.youtube.com/embed/M3TOKTHYc3g?si=1dNMYseJQyW6VJ_u'

    },

    {
        'id': 'a8',
        'title': 'Making Desktop Organizer',
        'name': 'DIY - Making Desktop Organizer with  Waste Paper - Pen Holder Organizer - Paper Crafts.mp4',
        'duration': '08:03',
         'link':'https://www.youtube.com/watch?v=GC7xMulhq7c',
         'embed': 'https://www.youtube.com/embed/GC7xMulhq7c?si=i40KnNCXzcVOjZ7M'

    },
    {
        'id': 'a9',
        'title': 'Pencil box with water bottle',
        'name': 'DIY Pencil box with water bottle __ How to make cute pencil box from water bottle.mp4',
        'duration': '02:08',
         'link':'https://www.youtube.com/watch?v=MMxn5Vh1hHo&embeds_referring_euri=https%3A%2F%2Fearthcarekids.netlify.app%2F&source_ve_path=MjM4NTE',
         'embed': 'https://www.youtube.com/embed/MMxn5Vh1hHo?si=KKZUse2kNpqQtzmn'

    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <div class='img'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg> </div>
                    <p class='ol'>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
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
        main_video.src = match_video.embed;
        main_video_link.href = match_video.link;
        main_video_title.innerHTML = match_video.title;
    }
})