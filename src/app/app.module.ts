import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessageComponent } from "./message/message.component";
import {
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule,
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, MessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent],
})
export class AppModule {}
