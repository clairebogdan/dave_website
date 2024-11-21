import { Component } from '@angular/core';
import { ContactBlockComponent } from "../contact-block/contact-block.component";

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [ContactBlockComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

}
