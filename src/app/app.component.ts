import {Component} from "@angular/core";

@Component({
    selector: "hellow-app",
    template: require("./app.component.html"),
})
export class HelloComponent {
    message = "Howdy Partner";
}