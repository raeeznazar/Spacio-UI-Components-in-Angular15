import { Component } from '@angular/core';
import { ToasterService } from './toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toasterService: ToasterService) { }

  showSuccess(): void {
    this.toasterService.showToaster('Operation successful!', 'success');
  }

  showError(): void {
    this.toasterService.showToaster('Operation failed!', 'error');
  }
}
