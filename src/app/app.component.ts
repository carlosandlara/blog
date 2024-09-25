import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Título';
  subtitle = 'Subtítulo';

  changeTitle(inputData: string) {
    this.title = inputData;
  }

  showFormValue(data: any) {
    console.log(data);
  }
}
