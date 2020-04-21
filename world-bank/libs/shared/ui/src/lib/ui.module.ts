import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, TitleComponent],
  exports: [NavbarComponent, TitleComponent]
})
export class UiModule {}
