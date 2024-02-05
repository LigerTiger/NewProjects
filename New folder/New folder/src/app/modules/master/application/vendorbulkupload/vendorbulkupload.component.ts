import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vendorbulkupload',
  templateUrl: './vendorbulkupload.component.html',
  styleUrls: ['./vendorbulkupload.component.scss']
})
export class VendorbulkuploadComponent {

  VendorBulkForm = new FormGroup({
    VendorBulkName: new FormControl(''),
  });
}
