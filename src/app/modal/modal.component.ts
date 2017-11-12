import { Component, Inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    constructor(
        public popup: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

}
