import LoaderCallback from './firebase/preload/LoaderCallback.js';
import ObjectFactory from './firebase/ObjectFactory.js'

import SimpleMessageFactory from './firebase/simplemessage/Factory.js';
import OnlineUserListFactory from './firebase/onlineuserlist/Factory.js';
import RoomFactory from './firebase/room/Factory.js';

class FirebasePlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        this.add = new ObjectFactory();
        pluginManager.registerFileType('rexFirebasePreload', LoaderCallback);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    initializeApp(config) {
        this.add.initializeApp(config);
        return this;
    }

    get app() {
        return this.add.app;
    }

    preload(scene, config) {
        if (!scene.sys.load.hasOwnProperty('rexFirebasePreload')) {
            scene.sys.load['rexFirebasePreload'] = LoaderCallback;
        }

        scene.load.rexFirebasePreload(config);
    }
}


export default FirebasePlugin;