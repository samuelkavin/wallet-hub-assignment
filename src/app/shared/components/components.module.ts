import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SliderComponent} from './slider/slider.component';
import {ApplyButtonComponent} from './apply-button/apply-button.component';

@NgModule({
  declarations: [HeaderComponent, SliderComponent, ApplyButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SliderComponent, ApplyButtonComponent],
})
export class ComponentsModule {}
