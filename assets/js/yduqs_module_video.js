
document.querySelectorAll('yduqs-module-video').forEach( element => {
    var module_number = element.module_number;

    setTimeout(function(){ 
        element.querySelectorAll('.c-module-video__box_playlist yduqs-card-video').forEach((e, index) =>{
            var modal = document.getElementById('modal-gallery-'+module_number);
            
            modal.addEventListener('modalClosed', function (){
                var video_playing = element.querySelector('yduqs-video-player');  
                video_playing.setAttribute('src', '');                               
            })

            e.addEventListener('click', function () {                                            
                var box_video = element.querySelector('yduqs-video-player');
                var new_video = document.createElement('yduqs-video-player');
                new_video.setAttribute('src', e.link_video);
                box_video.insertAdjacentHTML('beforebegin', new_video.outerHTML);

                var title = element.querySelector('.c-gallery-video__content_videos_description h3');
                var paragraph = element.querySelector('.c-gallery-video__content_videos_description_large');

                var active = element.querySelector(".c-gallery-video__content_playlist .c-playlist-video__items");

                active.querySelectorAll('.active').forEach( item =>{
                    item.classList.remove('active');
                })

                var active_child = active.children[index];
                position_active = active_child.querySelector('.c-card-video__thumb');    
                position_active.classList.add('active');

                title.innerHTML = e.title_video;
                paragraph.innerHTML = e.paragraph;

                box_video.remove();                                                
                modal.isopen = true;
            });                               
        });

        element.querySelectorAll('yduqs-modal yduqs-card-video').forEach((f, index) =>{                                 

            f.addEventListener('click', function () {
                var box_video = element.querySelector('yduqs-video-player');
                var new_video = document.createElement('yduqs-video-player');
                new_video.setAttribute('src', f.link_video);                                            
                box_video.insertAdjacentHTML('beforebegin', new_video.outerHTML);

                var title = element.querySelector('.c-gallery-video__content_videos_description h3');
                var paragraph = element.querySelector('.c-gallery-video__content_videos_description_large');

                var active = element.querySelector(".c-gallery-video__content_playlist .c-playlist-video__items");

                active.querySelectorAll('.active').forEach( item =>{
                    item.classList.remove('active');
                })

                var active_child = active.children[index];
                position_active = active_child.querySelector('.c-card-video__thumb');    
                position_active.classList.add('active');

                title.innerHTML = f.title_video;
                paragraph.innerHTML = f.paragraph;

                box_video.remove();
            }); 
        });
    }, 1000);
    
})
