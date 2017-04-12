import {ICommand, injectable} from "robotlegs";
@injectable()
export class StrangeCmd implements ICommand {
    execute() {
        console.log('Gotcha ! A strange signal ! I just only want to tell you that :)')
    }
}