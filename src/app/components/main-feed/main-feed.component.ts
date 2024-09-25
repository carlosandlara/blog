import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent {
  constructor(public dialog: MatDialog) {}

  openForm() {
    this.dialog.open(FormDialogComponent, {
      width: '800px',
      disableClose: true,
    });
  }
}
