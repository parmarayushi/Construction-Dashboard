import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './master/header/header.component';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';

@NgModule({
  declarations: [MasterComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [MasterComponent],
})
export class CoreModule {}
