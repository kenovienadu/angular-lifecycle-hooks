import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { ConstructorView } from './views/constructor.view';
import { IntroductionView } from './views/introduction.view';
import { DemoOneView } from './views/demo-one';
import { DemoTwoView } from './views/demo-two';
import { DemoThreeView } from './views/demo-three';
import { DemoOneComponent } from './components/demoOneComponent';
import { DemoTwoComponent } from './components/demoTwoComponent';
import { DemoThreeComponent } from './components/demoThreeComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFourView } from './views/demo-four';
import { DemoFourComponent } from './components/demoFourComponent';

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
    path: 'demo-one',
    component: DemoOneView,
  },
  {
    path: 'demo-two',
    component: DemoTwoView,
  },
  {
    path: 'demo-three',
    component: DemoThreeView,
  },
  {
    path: 'demo-four',
    component: DemoFourView,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionView,
    DemoOneView,
    DemoTwoView,
    DemoThreeView,
    DemoOneComponent,
    DemoTwoComponent,
    DemoThreeComponent,
    DemoFourView,
    DemoFourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
