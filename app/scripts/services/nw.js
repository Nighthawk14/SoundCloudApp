'use strict';

/**
 * @ngdoc service
 * @name soundCloudApp.nw
 * @description
 * # nw
 * Factory in the soundCloudApp
 */
angular.module('soundCloudApp')
  .factory('$nw', [function () {
    if (!window.process || !process.versions['node-webkit']){
      return {};
    }
    var path = require('path');
    var execPath = process.execPath;
    var appPath = path.normalize(execPath + '/../../../../../../../../../../..');
    var matches = /(.*?)\/([^\/]*)$/.exec(appPath);
    var parentFolder = matches[1];
    var appName = matches[2];

    var nw = {
      isEnabled: true,
      gui: require('nw.gui'),
      paths: {
        parentFolder: parentFolder,
        app: appPath,
        appName: appName
      }
    };
    nw.set = function(){
      var tray = new nw.gui.Tray({ title: '', icon: nw.paths.app+'/app/images/sc_grey_36x20.png' });
      var menu = new nw.gui.Menu();
      menu.append(new nw.gui.MenuItem({ type: 'checkbox', label: 'box1', icon:'http://localhost:9000/images/sc_grey_60x30.png' }));
      tray.menu = menu;
    };
    return nw;
  }]).run(['$nw',function($nw){
    if(!$nw.isEnabled){return;}
    /*var gui = $nw.gui;
    var win = gui.Window.get();
    var nativeMenuBar = new gui.Menu({ type: 'menubar' });
    nativeMenuBar.createMacBuiltin('Sound Cloud');
    win.menu = nativeMenuBar;*/
  }]);
