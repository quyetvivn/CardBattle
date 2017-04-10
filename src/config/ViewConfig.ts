import {IMediatorMap} from "robotlegs-pixi";
import {IConfig, inject, injectable} from "robotlegs";
import {StartView} from "../view/StartView";
import {StartMediator} from "../mediator/StartMediator";
@injectable()
export class ViewConfig implements IConfig {
    @inject(IMediatorMap)
    mediatorMap: IMediatorMap;
    configure () {
        this.mediatorMap.map(StartView).toMediator(StartMediator);
    }
}