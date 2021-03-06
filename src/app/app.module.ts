import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {GridModule} from "@progress/kendo-angular-grid";
import {HelloComponent} from "./app.component";

@NgModule({
    imports:      [BrowserModule, FormsModule, GridModule], // import Angular's BrowserModule
    bootstrap:    [HelloComponent],  // indicate the bootstrap component
    declarations: [HelloComponent], // register our component with the module
})
export class AppModule {}