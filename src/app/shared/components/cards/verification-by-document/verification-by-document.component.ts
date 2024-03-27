import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gb-verification-by-document',
  templateUrl: './verification-by-document.component.html',
  styleUrl: './verification-by-document.component.scss',
})
export class VerificationByDocumentComponent {
  public readonly verifyDocumentForm = new FormGroup({
    currentDocument: new FormControl('', [Validators.required]),
    newDocument: new FormControl('', [Validators.required]),
    uploadedDocument: new FormControl('', [Validators.required]),
  });

  public submitForm() {
    console.log(this.verifyDocumentForm.value);
  }

  public onRemoveDocument() {
    this.verifyDocumentForm.get('currentPhoneNumber')?.reset();
    console.log(this.verifyDocumentForm.value);
  }

  public onUploadDocument() {
    this.verifyDocumentForm.get('currentPhoneNumber')?.reset();
    console.log(this.verifyDocumentForm.value);
  }
}
