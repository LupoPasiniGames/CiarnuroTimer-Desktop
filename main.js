const { app, BrowserWindow, screen, dialog } = require("electron");

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
  appWindow.on("close", async (event) => {
    event.preventDefault(); //Prevents the app from closing immediately
    let leaveConfirm = await appWindow.webContents.executeJavaScript("leaveConfirmRequired");

    if (leaveConfirm) {
      let clickedButton = dialog.showMessageBoxSync(appWindow, {
        type: "info",
        buttons: ["Annulla", "Esci"],
        defaultId: 0,
        message: "Sei sicuro di voler uscire?\nLa partita è ancora in corso!"
      });

      if (clickedButton == 1) {
        app.exit()
      }
    } else {
      app.exit();
    }
  });

  appWindow.loadFile("assets/CiarnuroTimer-Web/index.html");
}

app.whenReady().then(startup);