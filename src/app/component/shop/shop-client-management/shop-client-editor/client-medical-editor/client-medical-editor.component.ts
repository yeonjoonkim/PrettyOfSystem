import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GenderType, UserSettingMedicalHistroyType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { MedicalHistoryService } from 'src/app/service/medical-history/medical-history.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'client-medical-editor',
  templateUrl: './client-medical-editor.component.html',
  styleUrls: ['./client-medical-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientMedicalEditorComponent implements OnInit, OnChanges {
  @Input() mode: 'create' | 'edit' = 'edit';
  @Input() type: 'shop' | 'client' = 'shop';
  public viewHistoryMode: 'edit' | 'view' = 'edit';
  public viewOtherStatusMode: 'edit' | 'view' = 'edit';
  public otherStatusProp: string = '';

  @Output() medicalChange = new EventEmitter<UserSettingMedicalHistroyType>();
  @Output() pregancyDueDateChange = new EventEmitter<string | null>();
  @Input() gender!: GenderType;
  @Input() timezone!: Constant.TimeZoneType;
  @Input() pregancyDueDate!: string | null;
  @Input() medical!: UserSettingMedicalHistroyType;

  public hidden = true;

  constructor(
    public medicalHistory: MedicalHistoryService,
    private _global: GlobalService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const genderChange = changes['gender'];
    if (genderChange !== undefined) {
      if (genderChange.currentValue !== 'Female') {
        this.pregancyDueDate = null;
        this.pregancyDueDateChange.emit(null);
      }
    }
  }

  ngOnInit() {
    const viewMode = this.mode === 'create' ? 'edit' : 'view';
    this.viewHistoryMode = viewMode;
    this.viewOtherStatusMode = viewMode;
  }

  public onChangeSymptomAndDisease() {
    this.medicalChange.emit(this.medical);
  }

  public onChangePaceMaker() {
    this.medicalChange.emit(this.medical);
  }

  public async translatingOtherStatus() {
    const prop = this._global.textTransform.preCleansingTranslateProp(this.otherStatusProp);
    const object = 'djaksdadasdas.dsaasda.daadasdafafa';
    const translated = await this._global.language.management.translate.translateDescriptionFormat(object, prop);
    if (!translated.result.isEmpty) {
      this.medical.otherStatus = translated.result.translated;
      this.medicalChange.emit(this.medical);
    } else {
      await this._global.toast.presentError('label.title.pleasetryagin');
    }
  }
  public async resetOtherStatus() {
    this.medical.otherStatus = null;
    this.otherStatusProp = '';
    this.medicalChange.emit(this.medical);
  }

  public async resetPregancyDueDate() {
    this.pregancyDueDate = null;
    this.pregancyDueDateChange.emit(this.pregancyDueDate);
  }

  public async onChangePregancyDueDateFormat() {
    this.pregancyDueDate =
      this.pregancyDueDate === null ? this._global.date.addDay(this._global.date.startDay(new Date()), 100) : null;
    this.pregancyDueDateChange.emit(this.pregancyDueDate);
  }

  public async onChangePregancyDueDate(date: string) {
    this.pregancyDueDate = date;
    this.pregancyDueDateChange.emit(this.pregancyDueDate);
  }
}
