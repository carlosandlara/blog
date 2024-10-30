import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Blog, BlogFormData } from 'src/app/app-interface';

@Component({
  selector: 'app-body',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Blog
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.myForm.patchValue({
        title: this.data.title,
        subtitle: this.data.subtitle,
        body: this.data.body,
        isPrimary: this.data.is_primary,
        publisherName: this.data.publisher_name,
        publisherJob: this.data.publisher_job,
      });
    }
  }

  reportTypes: string[] = [
    'Emergencia',
    'Política',
    'Social',
    'Económica',
    'Cultural',
    'Deportiva',
  ];

  jobPositions: string[] = [
    'Redactor Jefe',
    'Redactor',
    'Redactor en práctica',
  ];

  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl('', Validators.required),
    body: new FormControl('', [Validators.required]),
    reportType: new FormControl('', Validators.required),
    isPrimary: new FormControl(false, Validators.required),
    publisherName: new FormControl('', Validators.required),
    publisherJob: new FormControl('', Validators.required),
  });

  get title(): FormControl {
    return this.myForm.controls['title'];
  }

  get subtitle(): FormControl {
    return this.myForm.controls['subtitle'];
  }

  get body(): FormControl {
    return this.myForm.controls['body'];
  }

  get reportType(): FormControl {
    return this.myForm.controls['reportType'];
  }

  get isPrimary(): FormControl {
    return this.myForm.controls['isPrimary'];
  }

  get publisherName(): FormControl {
    return this.myForm.controls['publisherName'];
  }

  get publisherJob(): FormControl {
    return this.myForm.controls['publisherJob'];
  }

  getErrorMessage(): string {
    return 'Este campo es obligatorio.';
  }

  saveForm() {
    if (this.myForm.valid) {
      const blogFormData: BlogFormData = {
        title: this.myForm.value.title ?? '',
        subtitle: this.myForm.value.subtitle ?? '',
        body: this.myForm.value.body ?? '',
        reportType: this.myForm.value.reportType ?? '',
        isPrimary: this.myForm.value.isPrimary ?? false,
        publisherName: this.myForm.value.publisherName ?? '',
        publisherJob: this.myForm.value.publisherJob ?? '',
      };
      if (this.data) {
        // update blog
        this.dialogRef.close({ id: this.data.id, formData: blogFormData });
      } else {
        // create blog
        this.dialogRef.close(blogFormData);
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}
