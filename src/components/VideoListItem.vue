<template>
  <ion-card
    v-if="video"
    :routerLink="'/video/' + video.id"
    class="list-item">

      <ion-thumbnail><ion-img :src="video.thumbnail"/></ion-thumbnail>

      <ion-item >
        <ion-card-header>
          <ion-card-subtitle>{{ video.category.category }}</ion-card-subtitle>
          <ion-card-title>{{ video.title }}</ion-card-title>
        </ion-card-header>        
      </ion-item>

      <ion-card-content>
        <ion-col>조회수:{{ video.viewCnt }}</ion-col>
        <ion-col>좋아요:{{ video.likeCnt }}</ion-col>
      </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { 
  IonItem,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonThumbnail,
  IonCol
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoListItem",
  components: {
    IonItem,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonThumbnail,
    IonCol
  },
  props: {
    video: Object
  }
});
</script>

<style scoped>
  .list-item {
    width: 500px;
  }
  ion-avatar {
    width: 36px;
    height: 36px;
  }
  ion-card-header {
    text-overflow: ellipsis;
  }
  ion-card-title {
    font-size: 16px; 
  }
  ion-card-subtitle {
    font-size: 14px;
  }
  ion-card-content {
    float: right;
    font-size: 12px;
  }
  ion-thumbnail {
    width: 100%;
    min-height: 200px;
  }
</style>