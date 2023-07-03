import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './pages/footer/footer.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    Error404PageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
