import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  show: boolean = false;
  showimg(): void {
    this.show = true;
  }
  show2: boolean = false;

  showimg2(): void {
    this.show2 = true;
  }
  show3: boolean = false;
  showimg3(): void {
    this.show3 = true;
  }
  hide(): void {
    this.show = false
    this.show2 = false
    this.show3 = false
  }
}
