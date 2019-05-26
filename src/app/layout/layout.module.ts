import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutOnlyComponent } from './main-layout-only/main-layout-only.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    HttpClientModule
  ],
  declarations: [
    MainLayoutComponent,
    MainLayoutOnlyComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [MainLayoutComponent, MainLayoutOnlyComponent]
})
export class LayoutModule {}
