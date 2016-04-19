/// <reference path="../../../typings.d.ts" />
import {expect} from "chai";
import {HomePageViewModel} from "./HomePageViewModel";
import {INameService} from "../../../Services/INameService";
import {IAppWindow} from "../../../Services/IAppWindow";

class MockNameServer implements INameService {
    public getNames() : Array<string> {
        return ["1","2"];
    }
}

class MockAppWindow implements IAppWindow {
    public show(): void {
        
    }
    public hide(): void {
        
    }
}

describe("test", () => {
    it("will pass", (done: MochaDone) => {
        var viewModel = new HomePageViewModel(new MockNameServer(), new MockAppWindow());
        viewModel.init({title:"t",initName:"i"});
        expect(viewModel.name()).to.equal("i");
        expect(viewModel.title).to.equal("t");
        expect(viewModel.names()).to.contain("1");
        expect(viewModel.names()).to.contain("2");
        expect(viewModel.names()).to.not.contain("3");
        done();
    })
})