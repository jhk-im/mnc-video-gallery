<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button :text="getBackButtonText()" default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="video">
        <div>
        <video ref="videoPlayer" class="video-js">
            
        </video>
        </div>
      <ion-item>
        <ion-avatar slot="start">
            <ion-img :src="video.data.mc.profile"/>
        </ion-avatar>
        <ion-label class="ion-text-wrap">
          <h2>
            {{ video.data.mc.name }}
            <span class="date">
              <ion-note>{{ video.data.regDate }}</ion-note>
            </span>
          </h2>
          <h3>
              <ion-note>조회수:{{ video.data.viewCount }}</ion-note>
              <ion-note>좋아요수:{{ video.data.likeCount }}</ion-note>
              </h3>
        </ion-label>
      </ion-item>
      
      <div class="ion-padding">
        <h1>{{ video.data.title }}</h1>
        <p>{{ video.data.description }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { 
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonLabel, 
    IonNote, 
    IonPage, 
    IonToolbar,
    IonAvatar,
    IonImg
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import VideoDataService from "@/services/VideoDataService";
import videojs from 'video.js';
import "videojs-contrib-hls";

// Styles
import 'video.js/dist/video-js.css';

export default defineComponent({
  name: 'Home',
  data() {
    return {
        videoOptions: {
				autoplay: false,
				controls: true,
        aspectRatio: '9:16',
        preferFullWindow: false,
				sources: 
					[{
						src: '',
						type: 'application/x-mpegURL'
					}]
		},
        video: {
            code: 0,
            data: {
                viewCount: 0,
                likeCount: 0,
                title: '',
                description: '',
                playURL: '',
                regDate: '',
                videoType: 0,
                mc: {
                    name: '',
                    profile: '' 
                }
            }
        },
        player: null,
        getBackButtonText: () => {
            const win = window as any;
            const mode = win && win.Ionic && win.Ionic.mode;
            return mode === 'ios' ? 'Inbox' : '';
      }
    }
  },
  methods: {
      getVod() {
          const route = useRoute();
          VideoDataService.getVodDetail(route.params.id as never)
        .then(response => {
            console.log(response.data);
            this.video = response.data;
            this.playerSet();
        })
        .catch(e => {
            console.log(e);
        });
      },
      playerSet() {
        this.videoOptions.sources[0].src = this.video.data.playURL;
        if (this.video.data.videoType == 0) {
          this.videoOptions.aspectRatio = '16:9';
        } else {
          this.videoOptions.aspectRatio = '9:16';
        }
        this.player = videojs(this.$refs.videoPlayer, this.videoOptions, () => {
            //console.log('onPlayerReady', this.options);
        });
      }
  },
  mounted() {
        this.getVod();
  },
  beforeUnmount() {
    if (this.player) {
          //this.player.dispose();
      }
  },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    IonAvatar,
    IonImg
  },
});
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>