import { Base } from './Base';
import * as PIXI from 'pixi.js';
import { view } from './Deco';
import { getAsset } from '../tool/AssetManager';
import * as App from '../const/App';

export class Start extends Base {
    @view({type: PIXI.Sprite, src: getAsset('start', 'background')})
    background: PIXI.Sprite;
    @view({type: PIXI.Sprite, src: getAsset('start', 'button')})
    button: PIXI.Sprite;
    
    constructor() {
        super();
    }
}