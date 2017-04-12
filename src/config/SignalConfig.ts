import {IConfig, IInjector, inject, injectable} from "robotlegs";
import {StrangeSignal} from "../event/Signals";
@injectable()
export class SignalConfig implements IConfig {
    @inject(IInjector)
    injector: IInjector;
    
    configure() {
        this.injector.bind(StrangeSignal).toSelf().inSingletonScope();
    }
}