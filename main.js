const {app,BrowserWindow}=require('electron');
function create(){const w=new BrowserWindow({width:1280,height:720,fullscreen:false,autoHideMenuBar:true,title:'GTA Dushanbe 3D',webPreferences:{contextIsolation:true}});w.loadFile('index.html');w.webContents.on('before-input-event',(e,i)=>{if(i.key==='F11'&&i.type==='keyDown')w.setFullScreen(!w.isFullScreen())})}
app.whenReady().then(create);app.on('window-all-closed',()=>app.quit());
