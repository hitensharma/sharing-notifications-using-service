import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor() {}

  private _successMsgSource = new Subject<boolean>();
  successMsg$ = this._successMsgSource.asObservable();
  sendSuccessMsg(message: boolean) {
    this._successMsgSource.next(message);
  }

  private _errorMsgSource = new Subject<boolean>();
  errorMsg$ = this._errorMsgSource.asObservable();
  sendErrorMsg(message: boolean) {
    this._errorMsgSource.next(message);
  }

  private _uploadedMsgSource = new Subject<boolean>();
  uploadedMsg$ = this._uploadedMsgSource.asObservable();
  sendUploadedMsg(message: boolean) {
    this._uploadedMsgSource.next(message);
  }

  private _uploadFileExistMsgSource = new Subject<boolean>();
  uploadFileExistMsg$ = this._uploadFileExistMsgSource.asObservable();
  sendUploadFileExistMsg(message: boolean) {
    this._uploadFileExistMsgSource.next(message);
  }
}
