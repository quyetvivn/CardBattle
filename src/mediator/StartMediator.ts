import {Mediator} from "robotlegs-pixi";
import {StartView} from "../view/StartView";
export class StartMediator extends Mediator<StartView> {
    initialize() {
        this.eventMap.mapListener(this.view.button, 'click', this.onButtonClick)
    }

    onButtonClick = () => {
        this.view.parent.removeChild(this.view);
        alert('Game over !');
    };

    destroy() {
        console.log('StartMediator destroys');
    }
}