import {app, BrowserWindow, protocol} from 'electron';
import createProtocol from './createProtocol';

import installExtension, {
    REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

protocol.registerSchemesAsPrivileged([
    {scheme: 'app', privileges: {secure: true, standard: true}},
]);

function createWindow() {
    //todo: read window config

    mainWindow = new BrowserWindow({
        title: app.getName(),
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (isDevelopment) {
        mainWindow.loadURL('http://localhost:8000');
        mainWindow.webContents.openDevTools()
    } else {
        createProtocol('app');
        mainWindow.loadURL('app://./index.html');
    }
}

app.setAboutPanelOptions({
    website: 'http://skitsanos.com',
    applicationName: app.getName(),
    credits: 'Skitsanos &copy; 2020'
});

app.on('ready', async () => {
    if (isDevelopment) {
        await installExtension(REACT_DEVELOPER_TOOLS);
    }
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
