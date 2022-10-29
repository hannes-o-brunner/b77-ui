'use strict';

const path = require('path');
global.nowPlayingPluginLibRoot = path.resolve(__dirname) + '/lib';

const App = require("./index.js");
const app = new App({ logger: console });

app.onVolumioStart();
app.onStart();
