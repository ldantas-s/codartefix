function getYouTubeId(youtubeURL) {
    let youtubeId = youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,'$7',
    );
    
    return  {
        bgUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
        iframeSrc: `https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=0`,
        thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    }
}

export default getYouTubeId;