import {IAppWindow} from "./IAppWindow";
import {injectable} from "inversify";

@injectable()
export default class AppWindow {
    public show(): void {
        this.visible = true;
    }
    public hide(): void {
        this.visible = false;
    }
    private visible: boolean;
}