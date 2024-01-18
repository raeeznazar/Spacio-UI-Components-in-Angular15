import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterService } from './toaster.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
  animations: [
    trigger('toasterState', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ToasterComponent {
  @Input() message!: string; // Add '!' to indicate that it will be initialized later
  @Input() type!: string;    // Add '!' to indicate that it will be initialized later
  private subscription: Subscription;

  constructor(private toasterService: ToasterService) {
    //Adding a subscription to the ToasterService in the ToasterComponent ensures that it reacts to changes and updates its properties accordingly.
    this.subscription = this.toasterService.getToaster().subscribe(toast => {
      this.message = toast.message;
      this.type = toast.type;
      if (toast.message) {
        setTimeout(() => this.closeToaster(), 3000); // Close toaster after 1000ms
      }
    });
  }

  closeToaster(): void {
    this.toasterService.showToaster('', ''); // Clear toaster content to trigger the out animation
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

