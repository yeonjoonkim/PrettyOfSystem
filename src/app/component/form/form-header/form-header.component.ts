import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss'],
})
export class FormHeaderComponent implements OnInit {
  @Output() onClickCreate = new EventEmitter<boolean>();
  @Output() onClickSave = new EventEmitter<boolean>();
  @Output() onClickEdit = new EventEmitter<boolean>();
  @Output() onClickDelete = new EventEmitter<boolean>();
  @Output() onClickDismiss = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input() enabledSavebutton: boolean = true;
  @Input() title!: string;
  @Input() action: Constant.FormActionType = Constant.Default.FormAction.Read;
  public status: Constant.FormStatusType = Constant.Default.FormStatus.Reading;

  constructor(private _global: GlobalService) {}

  ngOnInit() {
    this.setDefaultStatus();
  }

  private setDefaultStatus() {
    this.status =
      this.action === Constant.Default.FormAction.Create
        ? (this.status = Constant.Default.FormStatus.Creating)
        : this.action === Constant.Default.FormAction.Edit
        ? (this.status = Constant.Default.FormStatus.Editing)
        : this.action === Constant.Default.FormAction.Read
        ? (this.status = Constant.Default.FormStatus.Reading)
        : (this.status = Constant.Default.FormStatus.Reading);
  }

  public async onClickSaveButton() {
    this.status =
      this._global.formCtrl.statusValiation.isEditing(this.status) ||
      this._global.formCtrl.statusValiation.isDeleting(this.status)
        ? Constant.Default.FormStatus.Saving
        : this.status;
    let isCreating: boolean = this._global.formCtrl.statusValiation.isCreating(this.status);
    let isSaving: boolean = this._global.formCtrl.statusValiation.isSaving(this.status);

    if (isCreating) {
      this.onClickCreate.emit(true);
    }
    if (isSaving) {
      await this.handleSaving();
    }
  }

  public onClickEditButton() {
    this.status = Constant.Default.FormStatus.Editing;
    this.readOnly = false;
    this.onClickEdit.emit(true);
  }

  public async handleSaving() {
    let editConfirmation: boolean = await this._global.confirmAlert.getEditConfirmation();
    if (editConfirmation) {
      this.onClickSave.emit(true);
    }
  }

  public async onClickDeleteButton() {
    let deleteConfirmation: boolean = await this._global.confirmAlert.getDeleteConfirmation();
    if (deleteConfirmation) {
      this.onClickDelete.emit(true);
    }
  }

  public onClickDismissButton() {
    this.onClickDismiss.emit(true);
  }
}
