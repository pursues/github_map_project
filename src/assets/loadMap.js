export function loadBMapScript(key) {
    return new Promise((resolve, reject) => {
      if (typeof BMapGL !== 'undefined') {
        resolve(BMapGL)
        return
      }
      window.onCallback = function () {
        resolve(BMapGL)
      }
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=${key}&callback=onCallback`
      script.onerror = reject
      document.body.appendChild(script)
    })
  }