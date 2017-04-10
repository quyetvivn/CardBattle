/// <reference path="../node_modules/robotlegs-pixi/definitions/pixi.d.ts" />
import 'reflect-metadata';
import * as PIXI from 'pixi.js';
import { StartView } from './view/StartView';
import { Context, MVCSBundle } from 'robotlegs';
import { PixiBundle, ContextView } from 'robotlegs-pixi';
import {App} from './const/App';
import {ViewConfig} from "./config/ViewConfig";

let renderer = PIXI.autoDetectRenderer(App.Width, App.Height, {});
let stage = new StartView();
let context = new Context().install(MVCSBundle, PixiBundle)
    .configure(ViewConfig)
    .configure(new ContextView((<any>renderer).plugins.interaction))
    .initialize();

document.body.appendChild(renderer.view);

let render = () => {
    renderer.render(stage);
    window.requestAnimationFrame(render);
};

render();