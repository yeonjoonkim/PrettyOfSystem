import { Injectable } from '@angular/core';
import { DeleteConfirmationAlert } from './confirmation-alert/confirmation-alert.service';
import { DeviceWidthService } from './device-width/device-width.service';
import { ErrorReporterService } from './error-reporter/error-reporter.service';
import { LanguageService } from './language/language.service';
import { LoadingService } from './loading/loading.service';
import { NumberValidationService } from './number-validation/number-validation.service';
import { TextTransformService } from './text-transform/text-transform.service';
import { ToastService } from './toast/toast.service';
import { StorageService } from './storage/storage.service';
import { LanguageTranslateService } from './language-translate/language-translate.service';
import { LanguageTranslationPackageService } from './language-translation-package/language-translation-package.service';
import { ModalService } from './modal/modal.service';
import { KendoUiService } from './kendo-ui/kendo-ui.service';
import { FormControllerService } from './form/form-controller.service';
import { DateService } from './date/date.service';
import { TimerService } from './timer/timer.service';
import { NetworkConnectionStatusService } from './network-connection-status/network-connection-status.service';
import { CryptService } from './crypt/crypt.service';
import { AgreementModalService } from './agreement-modal/agreement-modal.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(
    public appAgreement: AgreementModalService,
    public confirmAlert: DeleteConfirmationAlert,
    public deviceWidth: DeviceWidthService,
    public errorReport: ErrorReporterService,
    public language: LanguageService,
    public loading: LoadingService,
    public numberTransform: NumberValidationService,
    public textTransform: TextTransformService,
    public toast: ToastService,
    public storage: StorageService,
    public languageTranslate: LanguageTranslateService,
    public languageTranslationPackage: LanguageTranslationPackageService,
    public modal: ModalService,
    public kendo: KendoUiService,
    public formCtrl: FormControllerService,
    public date: DateService,
    public timer: TimerService,
    public networkConnection: NetworkConnectionStatusService,
    public crypt: CryptService,
    private _afs: AngularFirestore
  ) {}

  public isUndefinedOrNull(data: any): boolean {
    return data === undefined || data === null;
  }

  public newId() {
    return this._afs.createId();
  }
}
