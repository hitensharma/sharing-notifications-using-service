import { Component, OnInit } from "@angular/core";
import { MessageService } from "./services/message.service";
import { MessageComponent } from "./message/message.component";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "share-messagee-between-components";

  ngOnInit() {}

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  durationInSeconds = 1; //Snackbar duration in seconds to be shown on screen

  constructor(
    private _snackBar: MatSnackBar,
    private _msgService: MessageService
  ) {}

  //Snackbar Method
  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  //Message Methods sending the variable value to service
  errorMsg() {
    this._msgService.sendErrorMsg(true);
  }
  successMsg() {
    this._msgService.sendSuccessMsg(true);
  }
  uploadedMsg() {
    this._msgService.sendUploadedMsg(true);
  }
  uploadFileExistMsg() {
    this._msgService.sendUploadFileExistMsg(true);
  }
}
