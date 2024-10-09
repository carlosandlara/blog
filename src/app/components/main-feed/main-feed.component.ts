import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  constructor(public dialog: MatDialog, private service: MainService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      console.log(response);
    });
  }

  openForm() {
    const dialog = this.dialog.open(FormDialogComponent, {
      width: '800px',
      disableClose: true,
    });
    // dialog.afterClosed().subscribe((data) => {
    //   if (data) {
    //     this.service.createBlog(data).subscribe((res) => {
    //       console.log(res);
    //     });
    //   }
    // });
  }
}
