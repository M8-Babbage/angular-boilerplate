import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Input() id: string = ''

  ngOnInit(): void {
    console.log('Home Component', this.id)
  }
}
