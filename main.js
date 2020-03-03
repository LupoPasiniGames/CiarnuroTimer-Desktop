const { app, BrowserWindow, screen } = require("electron");

function startup() {
  let { width, height } = screen.getPrimaryDisplay().workAreaSize;
  width = parseInt(0.85 * width);
  height = parseInt(0.85 * height);

  const appWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      devTools: false
    }
  });

  appWindow.removeMenu();
  appWindow.loadFile("assets/CiarnuroTimer-Web/index.html");
}

app.whenReady().then(startup);