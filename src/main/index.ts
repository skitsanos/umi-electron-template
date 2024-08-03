import {app, BrowserWindow} from 'electron';
import {join} from 'path';

const isDev = process.env.NODE_ENV !== 'production';

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadURL(
        isDev
        ? 'http://localhost:8000'
        : `file://${join(__dirname, '../dist/index.html')}`
    );

    if (isDev) {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(() =>
{
    createWindow();

    app.on('activate', () =>
    {
        if (BrowserWindow.getAllWindows().length === 0)
        {
            createWindow();
        }
    });
});

app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});
