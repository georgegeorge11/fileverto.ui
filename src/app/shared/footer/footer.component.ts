import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-footer',
  imports: [
    MatToolbarModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
