import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss'],
})
export class SingleViewComponent implements OnInit {
  blogId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MainService
  ) {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.blogId = Number(this.activatedRoute.snapshot.params['id']);
    this.loadBlogData();
  }

  loadBlogData() {
    this.service.getBlogById(this.blogId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
    });
  }
}
