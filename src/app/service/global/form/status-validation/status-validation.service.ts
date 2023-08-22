import { Injectable } from '@angular/core';
import * as Constant from '../../constant/constant';
@Injectable({
  providedIn: 'root',
})
export class StatusValidationService {
  constructor() {}

  isCreating(status: string): boolean {
    return status === Constant.Default.FormStatus.Creating;
  }

  isSaving(status: string): boolean {
    return status === Constant.Default.FormStatus.Saving;
  }

  isEditing(status: string): boolean {
    return status === Constant.Default.FormStatus.Editing;
  }

  isReading(status: string): boolean {
    return status === Constant.Default.FormStatus.Reading;
  }

  isDeleting(status: string): boolean {
    return status === Constant.Default.FormStatus.Deleting;
  }
}
