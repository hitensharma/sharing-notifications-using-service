import { Component, OnInit } from "@angular/core";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  successMsg: boolean = false;
  errorMsg: boolean = false;
  uploadedMsg: boolean = false;
  uploadFileExistMsg: boolean = false;
  constructor(private _msgService: MessageService) {}
  ngOnInit() {
    this._msgService.successMsg$.subscribe(
      (message) => (this.successMsg = message)
    );
    this._msgService.errorMsg$.subscribe(
      (message) => (this.errorMsg = message)
    );
    this._msgService.uploadedMsg$.subscribe(
      (message) => (this.uploadedMsg = message)
    );
    this._msgService.uploadFileExistMsg$.subscribe(
      (message) => (this.uploadFileExistMsg = message)
    );
  }
}
