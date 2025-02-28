import { Component } from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../../shared/footer/footer.component';
import {LoaderComponent} from '../../shared/loader/loader.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    LoaderComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
