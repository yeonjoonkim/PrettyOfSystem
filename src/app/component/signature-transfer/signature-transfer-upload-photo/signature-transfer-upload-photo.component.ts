import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgxPhotoEditorService } from 'ngx-photo-editor';
import { take } from 'rxjs';
import { Image } from 'image-js';

@Component({
  selector: 'signature-transfer-upload-photo',
  templateUrl: './signature-transfer-upload-photo.component.html',
  styleUrls: ['./signature-transfer-upload-photo.component.scss'],
})
export class SignatureTransferUploadPhotoComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Output() signatureChange = new EventEmitter<string>();
  @Output() onClickUpload = new EventEmitter<void>();
  @Input() signature: string | null = '';

  constructor(private _photo: NgxPhotoEditorService) {}

  ngOnInit() {
    this.signature = this.signature !== null ? this.signature : '';
  }

  fileChangeHandler(event: any) {
    this._photo
      .open(event, {
        autoCropArea: 0.5,
        format: 'png',
        resizeToWidth: 198,
        resizeToHeight: 82,
      })
      .pipe(take(1))
      .subscribe(async event => {
        event.base64;
        if (typeof event.base64 === 'string' && typeof event.file !== undefined) {
          try {
            const data = await this.convertToBlackAndWhite(event.base64);
            this.signatureChange.emit(data);
          } catch (error) {
            console.error(error);
          }
        }
      });
  }

  async convertToBlackAndWhite(imageSrc: string): Promise<string> {
    try {
      const image = await Image.load(imageSrc);
      const grey = image.grey().toBase64();
      return `data:image/png;base64, ${grey}`;
    } catch (error) {
      console.error('Error converting image to black and white:', error);
      throw error;
    }
  }

  openFileDialog() {
    this.fileInput.nativeElement.value = '';
    this.fileInput.nativeElement.click();
    this.onClickUpload.emit();
  }
}
