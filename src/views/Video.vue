<template>
<b-container fluid>
    <b-row>
        <b-col cols="12">
            <h1 class="mt-5 mb-3 page_title text-center ">AUCTION ON DEMAND</h1>
            <b-col cols="8" offset="2">
                <hr>
            </b-col>
            <div class="video-player mt-5 mb-5">
                <b-row>
                    <b-col cols="0" xl="0" 2xl="1" 3xl="1"></b-col>
                    <b-col md="12"  lg="12" xl="7" 2xl="7" 3xl="7">
                        <div class="video-container">
                            <div>
                                <b-embed type="iframe" aspect="16by9" :src="this.activeVideo.youtubeURL" allowfullscreen></b-embed>
                            </div>
                            <h4 class="mt-2">{{this.activeVideo.title}}</h4>
                            <div class="video_icons mt-1">
                                <p class="views_icon">{{this.activeVideo.views}} views</p>
                                <div>
                                    <p class="like_icon"><i class="fas fa-thumbs-up mb-2"></i> {{this.activeVideo.likes}}</p>
                                    <p class="share_icon ml-3"> <i class="fas fa-share"></i> share</p>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </b-col>
                    <b-col cols="0" xl="1" 2xl="1" 3xl="1"></b-col>
                    <b-col cols="12" md="12" xl="4" 2xl="3" 3xl="3" class="video_list_wrapper" >
                        <div class="video-list">
                            <h5>Up Next</h5>
                            <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class="thumbnail mb-2">
                                <div class="thumbnail-img">
                                    <img :src="video.thumbnail" />
                                </div>
                                <div class="thumbnail-info">
                                    <h3 class="text-truncate">{{video.title}}</h3>
                                    <p>{{video.creator}}</p>
                                    <p class="thumbnail-views">{{video.views}} Views</p>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
let videos = [{
        id: 1,
        title: "97.5+/- Acre Equestrian Farm in Goldvein, VA Auctions Oct 23",
        thumbnail: "https://i.ytimg.com/vi/lmDnAoO9OeQ/mqdefault.jpg",
        youtubeURL: "https://www.youtube.com/embed/lmDnAoO9OeQ",
        creator: "Auction Network",
        likes: 0,
        views: 0
    },
    {
        id: 2,
        title: "500+/- Acres Premier Hunting Land in Chariton County, MO Auctions August 30",
        thumbnail: "https://i.ytimg.com/vi/9b0eRKxVrd4/mqdefault.jpg",
        youtubeURL: "https://www.youtube.com/embed/9b0eRKxVrd4",
        creator: "Auction Network",
        likes: 0,
        views: 0
    },
    {
        id: 3,
        title: "Luxury Log Home in Luna, NM Auctions July 21",
        thumbnail: "https://i.ytimg.com/vi/06yCJBe-hNc/mqdefault.jpg",
        youtubeURL: "https://www.youtube.com/embed/06yCJBe-hNc",
        creator: "Auction Network",
        likes: 0,
        views: 0
    },
    {
        id: 4,
        title: "Black Mountain, NC Home Auctions Oct 26",
        thumbnail: "https://i.ytimg.com/vi/VhC5UZvFOnE/mqdefault.jpg",
        youtubeURL: "https://www.youtube.com/embed/VhC5UZvFOnE",
        creator: "Auction Network",
        likes: 0,
        views: 0
    },
    {
        id: 5,
        title: "Luxury Whitefish, MT Home Auctions June 30",
        thumbnail: "https://i.ytimg.com/vi/EBr0Vn3RhL0/mqdefault.jpg",
        youtubeURL: "https://www.youtube.com/embed/EBr0Vn3RhL0",
        creator: "Auction Network",
        likes: 0,
        views: 0
    }
];

export default {

    name: 'Video',
    data() {
        return {
            videos,
            activeVideo: videos[0]
        }
    },
    methods: {
        chooseVideo(video) {
            //SET VIDEO AS ACTIVE VIDEO
            this.activeVideo = video;
            //INCREASE THE VIDEOS VIEWS BY 1
            video.views += 1;
        },
        addLike() {
            this.activeVideo.likes += 1;
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/custom.scss';



.video_icons {
    display: flex;
    justify-content: space-between;
    color: #747272;
}


.page_title {
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    color: rgb(85, 84, 84);
}

.share_icon,
.like_icon {
    display: inline;
}


.thumbnail {
    display: flex;
}

.thumbnail img {
    width: 190px;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.75);
}

.thumbnail-info {
    margin-left: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
}

.thumbnail h3 {
    font-size: 15px;
    font-weight: bold;
}

h3,
p {
    margin: 0;
    padding: 0;
}

.thumbnail-views {
    font-size: 14px;
}
</style>
