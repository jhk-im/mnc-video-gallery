<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>VIDEO LIST</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list >
        <ion-item lines="none" v-for="(item, index) in videoList.data.vods" :key="index">
            <VideoListItem :key="item.id" :video="item" />
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem
} from "@ionic/vue";
import { defineComponent } from "vue";
import VideoListItem from "@/components/VideoListItem.vue";
import VideoDataService from "@/services/VideoDataService";

export default defineComponent({
  name: "Home",
  data() {
    
    return {
      videoList: {
        data: {
          vods: []
        }
      }
    };
  },
  methods: {
    getVideoList() {
      VideoDataService.getVodList()
        .then(response => {
          this.videoList = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getVideoList();
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    VideoListItem
  }
});
</script>