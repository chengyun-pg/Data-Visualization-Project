const resizeHandlers = []

window.addEventListener('resize', () => {
  resizeHandlers.forEach((t) => t.fn())
})

function setScale(el, baseWidowWidth, origin, margin) {
  const width = document.documentElement.clientWidth
  const scale = width / baseWidowWidth
  const height = Number(getComputedStyle(el).height.replace('px', ''))
  const heightOffset = height * scale - height
  if (Array.isArray(margin) && margin.length) {
    // 设置margin补偿缩放后元素实际大小没有跟着变化导致的留有空白或者超出
    if (margin.includes('top')) {
      el.style.marginTop = heightOffset + 'px'
    } else if (margin.includes('bottom')) {
      el.style.marginBottom = heightOffset + 'px'
    }
    // 有需要再补齐其他margin
  }
  el.style.transformOrigin = origin
  el.style.transform = `scale(${scale})`
}

export default {
  mounted(el, binding) {
    const key = `${Date.now()}-${Math.random()}`
    el.dataset.resizeHandlerKey = key
    const { baseWidowWidth = 2520, origin = '0 0', margin } = binding.value || {}

    const resizeHandler = () => {
      setScale(el, baseWidowWidth, origin, margin)
    }

    resizeHandlers.push({
      key,
      fn: resizeHandler
    })
    resizeHandler()
  },
  beforeUnmount(el) {
    const key = el.dataset.resizeHandlerKey
    const index = resizeHandlers.findIndex((t) => t.key === key)
    if (index > -1) {
      resizeHandlers.splice(index, 1)
    }
  }
}
