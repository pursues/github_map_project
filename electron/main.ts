 // electron/main.ts
 import { app, BrowserWindow } from "electron"
 import path from "path"
  
 const createWindow = () => {
   const win = new BrowserWindow({
    width: 800,
    height: 600,
     webPreferences: {
       contextIsolation: false, // 是否开启隔离上下文
       nodeIntegration: false, // 渲染进程使用Node API经过多次验证与测试，找到了问题原因：是由于electron环境中创建的窗口设置了webPreferences中的nodeIntegration: true，使得浏览器环境集成了nodejs，影响了getscript的执行。关闭它就可以了。但是一般情况下这个开关不能关闭，项目代码中渲染进程严重依赖于nodejs部分模块，所以该问题暂时无解
       webSecurity: true,
       preload: path.join(__dirname, "./preload.js"), // 需要引用js文件
     },
   })
  
   // 如果打包了，渲染index.html
   if (process.env.NODE_ENV !== 'development') {
     win.loadFile(path.join(__dirname, "./index.html"))
     win.webContents.openDevTools()
   } else {
     let url = "http://localhost:3000" // 本地启动的vue项目路径。注意：vite版本3以上使用的端口5173；版本2用的是3000
     win.loadURL(url)
     win.webContents.openDevTools()
   }
 }
  
 app.whenReady().then(() => {
   createWindow() // 创建窗口
   app.on("activate", () => {
     if (BrowserWindow.getAllWindows().length === 0) createWindow()
   })
 })
  
 // 关闭窗口
 app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
     app.quit()
   }
 }) 