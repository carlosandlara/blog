import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export interface City {
  id: number;
  name: string;
  population: number;
  size: number;
  active: boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent {
  constructor(private dialogRef: MatDialogRef<FormDialogComponent>) {}

  reportTypes: any[] = [
    {
      title: 'Emergencia',
      active: true,
    },
    {
      title: 'Política',
      active: true,
    },
    {
      title: 'Social',
      active: true,
    },
    {
      title: 'Económica',
      active: true,
    },
    {
      title: 'Cultural',
      active: true,
    },
    {
      title: 'Deportiva',
      active: true,
    },
  ];

  jobPositions: any[] = [
    {
      id: 1,
      name: 'Redactor jefe',
    },
    {
      id: 2,
      name: 'Redactor',
    },
    {
      id: 3,
      name: 'Redactor en práctica',
    },
  ];

  myForm = new FormGroup({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl(null, Validators.required),
    body: new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]),
    reportType: new FormControl(null, Validators.required),
    isPrimary: new FormControl(false, Validators.required),
    publisherName: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    publisherJob: new FormControl(null, Validators.required),
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
      const formData = {
        title: this.myForm.value.title,
        subtitle: this.myForm.value.subtitle,
        body: this.myForm.value.body,
        report_type: this.myForm.value.reportType,
        is_primary: this.myForm.value.isPrimary,
        publisher_name: this.myForm.value.publisherName,
        publisher_job: this.myForm.value.publisherJob,
      };
      this.dialogRef.close(formData);
      this.myForm.reset();
    } else {
      alert('Le faltan campos al formulario, intente nuevamente.');
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
