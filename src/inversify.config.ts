/// <reference path="./typings.d.ts" />
import "reflect-metadata";
import {IAppWindow} from "./Services/IAppWindow";
import AppWindow from "./Services/AppWindow";
import {NameService} from "./Services/NameService";
import {INameService} from "./Services/INameService";
import {IHomePageViewModel} from "./Components/Pages/Home/IHomePageViewModel"
import {HomePageViewModel} from "./Components/Pages/Home/HomePageViewModel"
import {Kernel} from "inversify";

var kernel = new Kernel();
kernel.bind<IAppWindow>("IAppWindow").to(AppWindow);
kernel.bind<INameService>("INameService").to(NameService);
kernel.bind<IHomePageViewModel>("IHomePageViewModel").to(HomePageViewModel);

export default kernel;