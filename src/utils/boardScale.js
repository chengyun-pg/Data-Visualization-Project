import { ref, watch, onMounted, onUnmounted } from 'vue';

function debounce(fn, delay) {
  // 防抖
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}


// 
export default function useScreenFit(elSelector = ".board-container", options = {
  boardWidth: 1920,
  boardHeight: 1080,
}) {
  const screenWidth = ref(window.innerWidth);
  const screenHeight = ref(window.innerHeight);
  const boardWidth = ref(options.boardWidth);
  const boardHeight = ref(options.boardHeight);

  const translateDom = (width, height) => {
    document.querySelector(elSelector).style.cssText += `;transform: scale(${width},${height}) translate(0px, 0px);transform-origin: left top;overflow:hidden`;
  };

  const setScale = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
    geometricScaling(screenWidth.value, screenHeight.value);
  };

  const geometricScaling = (width, height) => {
    width = width / boardWidth.value;
    height = height / boardHeight.value;
    translateDom(width, height);
  };

  const geometricScalingWidth = debounce((width) => {
    width = width / boardWidth.value;
    let height = screenHeight.value / boardHeight.value;
    translateDom(width, height);
  }, 400);

  const geometricScalingHeight = debounce((height) => {
    let width = screenWidth.value / boardWidth.value;
    height = height / boardHeight.value;
    translateDom(width, height);
  }, 400);

  onMounted(() => {
    setScale();
    window.addEventListener('resize', setScale);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setScale);
  });

  watch(screenHeight, (val) => {
    geometricScalingHeight(val);
  });

  watch(screenWidth, (val) => {
    geometricScalingWidth(val);
  });

  return {
    screenWidth,
    screenHeight,
    boardWidth,
    boardHeight,
    setScale,
    geometricScaling,
    geometricScalingWidth,
    geometricScalingHeight,
  };
}
