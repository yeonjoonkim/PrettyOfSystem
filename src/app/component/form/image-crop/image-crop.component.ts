import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgxPhotoEditorService } from 'ngx-photo-editor';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss'],
})
export class ImageCropComponent implements OnInit, OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Output() currentImageChange = new EventEmitter<string>();
  @Output() fileChange = new EventEmitter<File>();
  private _destroy$ = new Subject<void>();
  @Input() title: string = '';
  @Input() isRequiredTitle: boolean = true;
  @Input() currentImage: string = '';
  @Input() type: 'picture' | 'logo' = 'logo';
  @Input() readOnly: boolean = true;

  constructor(private _photo: NgxPhotoEditorService) {}

  ngOnInit() {}

  fileChangeHandler(event: any) {
    this._photo
      .open(event, {
        aspectRatio: this.type === 'logo' ? 4 / 4 : 4 / 3,
        autoCropArea: 1,
      })
      .pipe(takeUntil(this._destroy$))
      .subscribe(event => {
        if (typeof event.base64 === 'string' && typeof event.file !== undefined) {
          this.currentImage = event.base64;
          this.fileChange.emit(event.file);
        }
      });
  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
