const { app, BrowserWindow, screen, dialog, shell } = require("electron");

async function startup() {
  let { width, height } = screen.getPrimaryDisplay().workAreaSize;
  width = parseInt(0.85 * width);
  height = parseInt(0.85 * height);

  const appWindow = new BrowserWindow({
    width: width,
    height: height,
    backgroundColor: "#000000",
    show: false,
    webPreferences: {
      devTools: false
    }
  });

  appWindow.removeMenu();

  appWindow.on("close", async (event) => {
    let leaveConfirm = await appWindow.webContents.executeJavaScript("leaveConfirmRequired");

    if (leaveConfirm) {
      let clickedButton = dialog.showMessageBoxSync(appWindow, {
        type: "info",
        buttons: ["Annulla", "Esci"],
        defaultId: 0,
        message: "Sei sicuro di voler uscire?\nLa partita è ancora in corso!"
      });

      if (clickedButton == 1) {
        app.exit();
      }
    }
  });

  appWindow.webContents.on("new-window", function (e, url) {
    //Opens external urls in the system browser
    e.preventDefault();
    shell.openExternal(url);
  });

  let resizeTimer;
  appWindow.on("resize", () => {
    let [width, height] = appWindow.getSize();

    //This timer saves the current window size only when it has been the same for 200 ms
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(async () => {
      appWindow.webContents.executeJavaScript(`localStorage.setItem("lastWidth", ${width})`);
      appWindow.webContents.executeJavaScript(`localStorage.setItem("lastHeight", ${height})`);
    }, 200);
  });

  appWindow.loadFile("assets/CiarnuroTimer-Web/index.html");

  let lastWidth = parseInt(await appWindow.webContents.executeJavaScript(`localStorage.getItem("lastWidth")`));
  let lastHeight = parseInt(await appWindow.webContents.executeJavaScript(`localStorage.getItem("lastHeight")`));

  if (!isNaN(lastWidth) && !isNaN(lastHeight))
    appWindow.setSize(lastWidth, lastHeight, false);

  appWindow.center();
  setTimeout(() => { appWindow.show(); }, 150); //The timeout prevents showing the page resizing its content
}

app.whenReady().then(startup);