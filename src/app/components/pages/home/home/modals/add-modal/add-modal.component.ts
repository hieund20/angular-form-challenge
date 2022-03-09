import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {
  model = {
    code: "",
    name: "",
    address: ""
  }

  constructor(public modal: MatDialogRef<AddModalComponent>) {}

  onCloseModal() {
    this.modal.close();
  }

  ngOnInit(): void {}
}
