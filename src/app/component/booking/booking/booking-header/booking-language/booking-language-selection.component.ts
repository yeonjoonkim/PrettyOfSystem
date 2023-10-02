import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NameValuePairType } from 'src/app/interface';
import { PopoverController } from '@ionic/angular';
import { BookingLanguageDropDownListComponent } from './booking-language-dropdown-list/booking-language-dropdown-list.component';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Component({
  selector: 'booking-language-selection',
  templateUrl: './booking-language-selection.component.html',
  styleUrls: ['./booking-language-selection.component.scss'],
})
export class BookingLanguageSelectionComponent implements OnInit, AfterViewInit {
  @ViewChild('dropdownListBtn') dropdownListBtn!: ElementRef;
  @ViewChild('selectedName') selectedName!: ElementRef;
  @ViewChild('dropDownArrow') dropDownArrow!: ElementRef;

  private _selection: NameValuePairType[] = [
    { name: 'हिन्दी', value: 'hi_in' }, // Hindi
    { name: '한국어', value: 'ko' }, // Korean
    { name: 'Italiano', value: 'it' }, // Italian
    { name: '日本語', value: 'ja' }, // Japanese
    { name: '简体中文', value: 'zh-hans' }, // Simplified Chinese
    { name: '繁體中文', value: 'zh-hant' }, // Traditional Chinese
    { name: 'Filipino', value: 'tl-ph' }, // Filipino
    { name: 'Español', value: 'es' }, // Spanish
    { name: 'Tiếng Việt', value: 'vi-vn' }, // Vietnamese
    { name: 'English', value: 'en' }, // English
    { name: 'Indonesia', value: 'id_id' }, // Indonesian
    { name: 'Français', value: 'fr' }, // French
    { name: 'ไทย', value: 'th' },
  ];
  @Input() maxHeight: string = '150px';

  public selected: NameValuePairType = { name: '', value: '' };
  public isOpenStatus: boolean = false;

  constructor(
    private _language: LanguageService,
    private _popoverCtrl: PopoverController,
    private _renderer: Renderer2
  ) {}

  async ngOnInit() {
    await this.setDefault();
  }

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  private setupEventListeners() {
    if (this.dropdownListBtn && this.selectedName) {
      // Handle button click event separately
      this._renderer.listen(this.dropdownListBtn.nativeElement, 'click', (event: Event) => {
        this.handleButtonClick(event);
      });

      this._renderer.listen(this.dropDownArrow.nativeElement, 'click', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dropdownListBtn.nativeElement.click();
      });

      this._renderer.listen(this.selectedName.nativeElement, 'click', (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dropdownListBtn.nativeElement.click();
      });
    }
  }

  private async handleButtonClick(event: Event) {
    await this.presentDropdownList(event);
  }

  private async presentDropdownList(event: any) {
    if (!this.isOpenStatus) {
      this.isOpenStatus = true;
      let dropdownList = await this.getPopoverSettings(event);
      await dropdownList.present();
      await this.dismissListener(dropdownList);
    }
  }

  private async dismissListener(dropdownList: HTMLIonPopoverElement) {
    let event = await dropdownList.onWillDismiss();
    if (event?.data !== undefined) {
      this.selected = event.data?.selected;
      await this.onChangeLanguage();
    }
    this.isOpenStatus = false;
  }

  private async setDefault() {
    const current = await this._language.management.storage.getCurrentLanguage();
    const currentSelected = this._selection.find(l => l.value === current);
    if (currentSelected !== undefined) {
      this.selected = currentSelected;
    } else {
      this.selected = { name: 'English', value: 'en' };
      this.onChangeLanguage();
    }
  }

  /** This function will set the global language by using language service. */
  public async onChangeLanguage() {
    this._language.currentLanguage = this.selected.value;
    await this._language.onLanguageChange();
  }

  private async getPopoverSettings(event: any) {
    return await this._popoverCtrl.create({
      component: BookingLanguageDropDownListComponent,
      event: event,
      translucent: true,
      size: 'cover',
      componentProps: {
        selected: this.selected,
        selection: this._selection,
        filterable: true,
        maxHeight: this.maxHeight,
      },
    });
  }
}
