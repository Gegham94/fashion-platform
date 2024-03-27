import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-new-message',
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.scss',
})
export class NewMessageComponent {
  public files: any = [];
  public maxCharacterCount: number = 500;
  public characterCount: number = 0;

  public attachedFileCountError = false;

  public allowedFileTypes = ['doc', 'pdf', 'docs', 'xml'];
  public allowedImageTypes = ['jpg', 'jpeg', 'png', 'svg'];

  public messageForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    files: new FormControl([]),
  });

  public get acceptFileTypes(): string {
    return this.allowedFileTypes.map((type) => `file/${type}`).join(',');
  }

  public get acceptImageTypes(): string {
    return this.allowedImageTypes.map((type) => `image/${type}`).join(',');
  }

  public get subjectControl(): FormControl {
    return this.messageForm.get('subject') as FormControl;
  }

  public onSelectFiles(event: any): void {
    if (event.target.files.length > 5) {
      this.attachedFileCountError = true;
    } else
      for (let file of event.target.files) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (this.files.length >= 5) {
            this.attachedFileCountError = true;
          } else {
            this.files.push({
              dataURL: reader.result,
              fileType: this.getFileType(reader.result as string),
              name: file.name,
            });
            event.target.value = null;
            this.messageForm.patchValue({ files: this.files });
            this.attachedFileCountError = false;
          }
        };
      }
  }

  public onRemove(index: number): void {
    this.files.splice(index, 1);
  }

  private getFileType(dataURL: string): string {
    return dataURL.split(';')[0].split(':')[1];
  }

  public sendMessage() {}

  public updateCharacterCount(event: any): void {
    this.characterCount = event.target.value.length;
  }
}
