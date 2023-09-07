import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { IPairKeyValue } from 'src/app/interface';

@Component({
  selector: 'key-pair-value-dropdown-single-selection',
  templateUrl: './key-pair-value-dropdown-single-selection.component.html',
  styleUrls: ['./key-pair-value-dropdown-single-selection.component.scss'],
})
export class KeyPairValueDropdownSingleSelectionComponent implements OnInit, OnDestroy {
  @Output() selectedChange = new EventEmitter<IPairKeyValue>();

  @ViewChild('dropdownlist')
  public dropdownlist!: DropDownListComponent;
  public clicked: boolean = false;
  public selectedSelection: IPairKeyValue = { key: '', value: '' };
  @Input() title: string = '';
  @Input() selection: IPairKeyValue[] = [];
  @Input()
  get selected() {
    return this.selectedSelection;
  }
  set selected(value: IPairKeyValue) {
    this.selectedSelection = value;
    this.selectedChange.emit(value);
  }

  private dropdownStatus = {
    open: false,
    close: true,
  };

  private outsideClickListener!: () => void;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  async ngOnInit() {
    await this.onChangeSelection(this.selectedSelection);
    this.addOutsideClickListener();
  }

  ngOnDestroy(): void {
    this.removeOutsideClickListener();
  }

  public async onChangeSelection(selected: IPairKeyValue | undefined) {
    let returnSelected = this.selection.find(s => s.value === selected?.value);
    if (returnSelected !== undefined && selected !== undefined) {
      this.selected = returnSelected;
      this.dropdownStatus.close = true;
      this.dropdownStatus.open = false;
      setTimeout(() => {
        this.dropdownlist.toggle(false);
      });
    }
  }

  public itemDisabled(itemArgs: { dataItem: IPairKeyValue; index: number }) {
    return itemArgs.dataItem?.key === this.selectedSelection?.key;
  }

  public async onOpen() {
    this.dropdownStatus.close = false;
    this.dropdownStatus.open = true;
    this.clicked = true;
  }

  public async onClose(event: any) {
    event.preventDefault();

    if (this.dropdownStatus.close) {
      if (!this.dropdownlist.wrapper.nativeElement.contains(document.activeElement)) {
        this.dropdownlist.toggle(false);
      }
    }
  }

  private addOutsideClickListener(): void {
    this.outsideClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickedInside = this.elementRef.nativeElement.contains(target);
      if (!clickedInside) {
        this.dropdownlist.toggle(false);
      }
    });
  }

  private removeOutsideClickListener(): void {
    if (this.outsideClickListener) {
      this.outsideClickListener();
    }
  }
}
