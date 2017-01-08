import 'reflect-metadata';
import * as PIXI from 'pixi.js';
import { Start } from './view/Start';
import { Context, MVCSBundle } from 'robotlegs';
import { PixiBundle, ContextView } from 'robotlegs-pixi';
import * as App from './const/App';

let renderer = PIXI.autoDetectRenderer(App.Width, App.Height, {});
let stage = new Start();
let context = new Context().install(MVCSBundle, PixiBundle).
    configure(new ContextView((<any>renderer).plugins.interaction)).
    initialize();

document.body.appendChild(renderer.view);

let render = () => {
    renderer.render(stage);
    window.requestAnimationFrame(render);
}

render();