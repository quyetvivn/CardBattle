import 'reflect-metadata';
import PIXI = require('pixi.js');
import { AppView } from './view/AppView';
import { Context, MVCSBundle } from 'robotlegs';
import { PixiBundle, ContextView } from 'robotlegs-pixi';

let renderer = PIXI.autoDetectRenderer(568, 320, {});
let stage = new AppView();
let context = new Context().install(MVCSBundle, PixiBundle).
    configure(new ContextView((<any>renderer).plugins.interaction)).
    initialize();

document.body.appendChild(renderer.view);

let render = () => {
    renderer.render(stage);
    window.requestAnimationFrame(render);
}