declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module 'video.js';
declare module 'videojs-contrib-hls';
declare module 'vue-video-player';
