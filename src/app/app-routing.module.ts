import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { SingleViewComponent } from './components/single-view/single-view.component';

const routes: Routes = [
  { path: '', component: MainFeedComponent },
  { path: 'blog/:id', component: SingleViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
