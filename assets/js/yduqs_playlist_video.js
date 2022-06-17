
fetch('./json/videos.json')
    .then(response => response.json())
    .then(json => {
        document.querySelectorAll('yduqs-playlist-video').forEach( playlist => {
            playlist.initialize(json);
        })
})
