import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY)
  ? localStorage.getItem(LOCAL_STORAGE_KEY)
  : 0;

player.on('timeupdate', throttle(storageFunc, 1000));

function storageFunc(e) {
  localStorage.setItem(LOCAL_STORAGE_KEY, e.seconds)
}

player.setCurrentTime(currentTime)



    
