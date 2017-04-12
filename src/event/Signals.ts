import {injectable} from "robotlegs";
import {Signal, OnceSignal} from "signals.js";
import {decorate} from "inversify";
// must decorate & parent class with injectable before decorate derived class
decorate(injectable(), Signal);
decorate(injectable(), OnceSignal);

@injectable()
export class StrangeSignal extends Signal {
    constructor() {
        super(String);
    }
}