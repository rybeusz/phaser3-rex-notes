import PerspectiveImageFactory from './gameobjects/perspective/image/Factory.js';
import PerspectiveImageCreator from './gameobjects/perspective/image/Creator.js';
import PerspectiveImage from './gameobjects/perspective/image/Image.js';
import PerspectiveRenderTextureFactory from './gameobjects/perspective/rendertexture/Factory.js';
import PerspectiveRenderTextureCreator from './gameobjects/perspective/rendertexture/Creator.js';
import PerspectiveRenderTexture from './gameobjects/perspective/rendertexture/RenderTexture.js';


Phaser.GameObjects.GameObjectFactory.register('rexPerspectiveImage', PerspectiveImageFactory);
Phaser.GameObjects.GameObjectCreator.register('rexPerspectiveImage', PerspectiveImageCreator);

Phaser.GameObjects.GameObjectFactory.register('rexPerspectiveRenderTexture', PerspectiveRenderTextureFactory);
Phaser.GameObjects.GameObjectCreator.register('rexPerspectiveRenderTexture', PerspectiveRenderTextureCreator);

export default {
    PerspectiveImage: PerspectiveImage,
    PerspectiveRenderTexture: PerspectiveRenderTexture
}