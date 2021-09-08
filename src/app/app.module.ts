import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { ConstructorView } from './views/constructor.view';
import { IntroductionView } from './views/introduction.view';
import { NgOnChangesView } from './views/ngOnChanges.view';
import { NgOnDestroyView } from './views/ngOnDestroy.view';
import { NgOnInitView } from './views/ngOnInit.view';

const routes: Routes = [
  {
    path: '',
    component: IntroductionView,
  },
  {
    path: 'constructor',
    component: ConstructorView,
  },
  {
    path: 'ngoninit',
    component: NgOnInitView,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConstructorView,
    NgOnInitView,
    NgOnDestroyView,
    NgOnChangesView,
    IntroductionView,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
