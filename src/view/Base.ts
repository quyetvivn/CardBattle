import { MetaKey } from './../const/MetaKey';
import * as PIXI from 'pixi.js';

export class Base extends PIXI.Container {
    static removeFromStage = (view: any) => {
        if (view instanceof PIXI.Container) {
            while (view.children.length > 0) {
                Base.removeFromStage(view.removeChildAt(0));
            }
        }
    }

    constructor() {
        super();

        let baseProps = [];
        let props = [];

        for (let prop in this) {
            let meta = Reflect.getMetadata('view', this, prop);
            if (meta != undefined) {
                if (Reflect.getPrototypeOf(this).hasOwnProperty(prop)) {
                    props.push(prop);
                } else {
                    baseProps.push(prop);
                }
                
                switch (meta[MetaKey.Type]) {
                    case PIXI.Sprite:
                        if (meta.hasOwnProperty(MetaKey.Src)) {
                            this[prop] = <any>PIXI.Sprite.fromImage(
                                meta[MetaKey.Src]);
                        }
                        
                        break;
                    default:
                        this[prop] = new meta[MetaKey.Type];
                }
            }

            for (let metaProp in meta) {
                if (!MetaKey.hasOwnProperty(metaProp)) {
                    this[prop][metaProp] = meta[metaProp];
                }
            }
        }

        for (let prop of baseProps) {
            this.addChild(this[prop]);
        }
        for (let prop of props) {
            this.addChild(this[prop]);
        }
    }
}