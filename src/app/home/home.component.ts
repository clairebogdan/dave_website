import { Component } from '@angular/core';
import { ContactBlockComponent } from '../contact-block/contact-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
