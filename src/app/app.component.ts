import {Component, ViewEncapsulation} from "@angular/core";
import { RowClassArgs } from "@progress/kendo-angular-grid";

@Component({
    selector: "hellow-app",
    encapsulation: ViewEncapsulation.None,
    styles: [`
       .k-grid tr.even { background-color: #f45c42; }
       .k-grid tr.odd { background-color: #41f4df; }
   `],
    template: require("./app.component.html"),
})
export class HelloComponent {
    public gridData: any[] = products;
    message = "Howdy Partner";

    public rowCallback(context: RowClassArgs) {
        const isEven = context.index % 2 == 0;
        return {
            even: isEven,
            odd: !isEven,
        };
    }
    onButtonClick() {
        this.message = "YOU CLICKED THE BUTTON!!!";
    }
}
const products = [{
    ProductID: 1,
    ProductName: "Chai",
    UnitPrice: 18.0000,
    Discontinued: true,
}, {
    ProductID: 2,
    ProductName: "Chang",
    UnitPrice: 19.0000,
    Discontinued: false,
},
];