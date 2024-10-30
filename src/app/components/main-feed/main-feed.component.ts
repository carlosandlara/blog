import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { MainService } from 'src/app/services/main.service';
import { Blog, BlogFormData } from 'src/app/app-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  blogs!: Blog[];
  isLoading = false;

  constructor(
    public dialog: MatDialog,
    private service: MainService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.isLoading = true;
    this.service.getAll().subscribe((response) => {
      this.blogs = response;
      this.isLoading = false;
    });
  }

  createBlog() {
    const dialog = this.dialog.open(FormDialogComponent, {
      width: '800px',
      disableClose: true,
    });
    dialog.afterClosed().subscribe((data?: BlogFormData) => {
      if (data) {
        this.service.createBlog(data).subscribe({
          next: () => {
            alert('Noticia creada correctamente');
          },
          error: () => {
            alert('Error al crear');
          },
        });
      }
    });
  }

  editBlog(blogId: number) {
    const selectedBlog = this.blogs.find((blog) => blog.id === blogId);
    const dialog = this.dialog.open(FormDialogComponent, {
      width: '800px',
      disableClose: true,
      data: selectedBlog,
    });

    dialog.afterClosed().subscribe((data?: BlogFormData) => {
      if (data) {
      }
    });
  }

  goToBlog(blogId: number) {
    this.router.navigate(['/blog', blogId]);
  }
}
