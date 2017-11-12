import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material ';
  emailmsg = 'Enter email';
  invalid = 'Invalid email';
  colortype: string;
  email: string;

  constructor(public modal: MatDialog) { }

  openModal(): void {
    const popup = this.modal.open(ModalComponent, {
      width: '350px',
      data: { name: this.email, colortype: this.colortype }
    });
    popup.afterClosed().subscribe(result => {
      console.log('Modal closed');
      this.colortype = result;
      this.email = this.email;
    });
  }
}

