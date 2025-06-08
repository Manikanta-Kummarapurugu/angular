import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  styles: `
        @media screen and (max-width: 991px) {
            .video-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;

                iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    `
})
export class DashboardComponent {

}
