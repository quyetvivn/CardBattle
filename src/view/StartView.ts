import * as PIXI from 'pixi.js';
import { getAsset } from '../tool/AssetManager';
import Container = PIXI.Container;
import Sprite = PIXI.Sprite;

export class StartView extends Container {
    background: Sprite;
    button: Sprite;
    
    constructor() {
        super();
        this.background = Sprite.fromImage(getAsset('start', 'background'));
        this.button = Sprite.fromImage(getAsset('start', 'button'));
    }
}