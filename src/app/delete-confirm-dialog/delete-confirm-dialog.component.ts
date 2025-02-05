import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef ,MatDialogClose, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogTitle, MatDialogContent, MatDialogActions} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrl: './delete-confirm-dialog.component.css'
})
export class DeleteConfirmDialogComponent {
confirmMessage:string="";
constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.confirmMessage=data.displayMessage;
  }
OnClose(op:boolean)
{
  this.dialogRef.close(op);
}
}
