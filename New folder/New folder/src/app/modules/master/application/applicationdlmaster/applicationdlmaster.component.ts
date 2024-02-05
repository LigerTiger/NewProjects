import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { CommenPopupService } from 'src/app/components/common-popup/common-popup.service';
import { SpinnerService } from 'src/app/components/spinner/spinner.service';
import { ApplicationdlmasterService } from './applicationdlmaster.service';

@Component({
  selector: 'app-applicationdlmaster',
  templateUrl: './applicationdlmaster.component.html',
  styleUrls: ['./applicationdlmaster.component.scss'],
})
export class ApplicationdlmasterComponent implements OnInit {
  showSpinner: boolean = false;

  dlmaster!: FormGroup;

  constructor(public spinnerService:SpinnerService,public commenmodel:CommenPopupService,  private appdlservice: ApplicationdlmasterService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef){}

  //variable global
  postdlmasterresponse: any;
  dltableMaster: any;
  updateResponse: any;
  p: number = 1; 
  searchResponse:any
  // selectedOption: string = '-- Select --';

  //ngModel
  emailmodel: any;
  isactive = '';
  //end ngmodel

  dynamicOptions: any;
  dataset: any;
  uniqueemail=false;
  searchinputselect=false
  uniqueApplicationname = false
  applicationnameexist = false
  isEditMode =false

  recordupdadted=false
  recordsaved=false






  ngOnInit(): void {
    // Simulating an asynchronous operation, e.g., an HTTP request
    this.spinnerService.start();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);

    this.dlmaster = this.fb.group({
      appName: ['', Validators.required],
      activeStatus: ['', [Validators.required]],
      emailID: ['', [Validators.email, Validators.required,this.validateGmail]],
    });
    this.getDlMasterList();
    this.getDropdownlist();
  }








  // submit(){
  //   this.commenmodel.openModal('Record Added', 'Record added succesfully?');

  // }











  get applicationname() {
    return this.dlmaster.get('applicationname');
  }
  get status() {
    return this.dlmaster.get('status');
  }
  get email() {
    return this.dlmaster.get('email');
  }


  totallength:any
  getDlMasterList() {
    this.appdlservice.getDlMatser().subscribe((res) => {
      this.dataset = res;
      this.totallength = this.dataset.length
      // alert(this.totallength)
    });
  }

  getDropdownlist() {
    this.appdlservice.getApplicationnameList().subscribe((res) => {
      this.dynamicOptions = res;
      console.log(this.dynamicOptions, '====');
    });
  }

  submit() {
    if (this.dlmaster.valid) {
      this.appdlservice.postDlMaster(this.dlmaster.value).subscribe((res) => {
        this.postdlmasterresponse = res;
        console.log("save response ===",this.postdlmasterresponse.response == "Duplicate name is not allowed");
        if(this.postdlmasterresponse.response == "Duplicate name is not allowed"){
         this.uniqueApplicationname = true
        }
        else{
          this.commenmodel.openModal('Record Added', 'Record added succesfully?');
          this.uniqueApplicationname = false
          setTimeout(()=>{
            window.location.reload();
          },2000) 
         this.recordsaved=true
        }
        // window.location.reload();
      });
    } else {
      // alert('Invalid Form');
      console.log(this.dlmaster.value);
      this.uniqueemail = true;
    }
  }

  mlmaster_id: any;
  updateDltable() {
    if (this.dlmaster.valid) {
      this.mlmaster_id = localStorage.getItem('id');
      // alert(this.mlmaster_id)
      this.appdlservice
        .updateDlMaster(this.dlmaster.value, this.mlmaster_id)
        .subscribe((res) => {
          this.updateResponse = res;
          console.log("===",  this.updateResponse);
          
          if (this.updateResponse.response == 'Duplicate records are not allowed') {
             this.applicationnameexist = true
          }
          else{
          this.commenmodel.openModal('Record Updated', 'Record updated succesfully?');
          this.applicationnameexist = false
          this.postbtn = true;
          this.updadebtn = false;
          this.recordupdadted=true
          setTimeout(()=>{
            window.location.reload();
          },1000)
          }
        });
    } else {
      // alert('Invalid Form');
      console.log(this.dlmaster.value);
    }
  }
  searchbtn = true
  updadebtn = false;
  postbtn = true;
  edit(data: any) {
    this.searchbtn = false
    this.isEditMode = true;
    console.log('isEditMode:', this.isEditMode);
    this.updadebtn = true;
    this.postbtn = false;
    this.mlmaster_id = data.id;
    this.isEditMode = true;
    this.cdr.detectChanges();
    localStorage.setItem('id', data.id);
    this.dlmaster.patchValue({
      appName: data.appName,
      activeStatus: data.activeStatus,
      emailID: data.emailID,
    });
  }

  reset() {
    this.recordupdadted=false
    this.recordsaved = false
    this.searchbtn = true
    this.applicationnameexist = false
    this.updadebtn = false;
    this.postbtn = true;
    this.nodatafound=false;
    this.uniqueApplicationname = false
    this.isEditMode = false
    this.cdr.detectChanges();

    this.dlmaster.patchValue({
      appName: '',
      activeStatus: '',
      emailID: '',
    });
    // this.dlmaster.reset()
    this.dlmaster.markAsPristine();
    this.dlmaster.markAsUntouched();

    // this.clearStatusError();

    this.getDlMasterList();
    this.getDlMasterList()
  }

  // clearStatusError() {
  //   // Clear the error message for activeStatus form control
  //   const appNameControl:any = this.dlmaster.get('appName');
  //   const activeStatusControl:any = this.dlmaster.get('activeStatus');
  //   const emailIDControl:any = this.dlmaster.get('emailID');
  //   if (activeStatusControl || appNameControl|| emailIDControl) {
  //     activeStatusControl.setErrors(null);
  //     appNameControl.setErrors(null);
  //     emailIDControl.setErrors(null);
  //   }
  // }


  getDlmaster() {
    this.appdlservice.getDlMatser().subscribe((res) => {
      this.dltableMaster = res;
     
    });
  }

  filteredDataset: any[] = [];
  nodatafound= false;
  search(){
    this.dlmaster.markAsPristine();
    this.dlmaster.markAsUntouched();
    const appNameValue = this.dlmaster.get('appName')?.value ?? '';
    const emailIDValue = this.dlmaster.get('emailID')?.value ?? '';
    const activeStatusValue = this.dlmaster.get('activeStatus')?.value ?? '';
    console.log("search input values===",appNameValue,emailIDValue,activeStatusValue);
    this.appdlservice.searchByAny(appNameValue,emailIDValue,activeStatusValue).subscribe(res=>{
      this.dataset = res;
      console.log("---",this.dataset);
      // this.filteredDataset = this.filterDataset(appNameValue, emailIDValue, activeStatusValue);
      // this.dataset = this.filteredDataset
      if(this.dataset.length == 0 ){
       this.nodatafound= true;
       this.commenmodel.openModal('Record Not found', 'Record Not Found?');
       this.getDlMasterList()
      }else{
        this.nodatafound=false;
      }
      this.p = 1;
    })
  }


  //email validation
  validateGmail(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value;

    // Check if the email is a valid Gmail address
    if (!email.toLowerCase().endsWith('@gmail.com')) {
      return { invalidGmail: true };
    }

    return null;
  }
  isEmailInvalid() {
    const control = this.dlmaster.get('email');
    return control?.hasError('invalidGmail') && control.touched;
  }




  //start pagination code
  pageselection=5
  currentPage = 1;
  itemsPerPage = 5; 
  totalItems = 50; 

  get totalPages(): number {
    this.totalItems =this.totallength
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(direction: string) {
    if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    } else if (direction === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    this.loadData();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadData();
  }

  loadData() {
    this.getDlMasterList();
    // alert(`Loading data for page ${this.currentPage}`);
  }

  onSelectChange(selectedValue: any): void {
    console.log('Selected value:', selectedValue);
    this.itemsPerPage = selectedValue;
  }

//end pagination


  isSearchButtonEnabled(): boolean {
    return Object.values(this.dlmaster.controls).some(control => {
      if (control instanceof FormControl) {
        return control.valid && control.value !== '';
      }
      if (control instanceof FormGroup) {
        return this.isSearchButtonEnabledInGroup(control);
      }
      return false;
    });
  }

   private isSearchButtonEnabledInGroup(group: FormGroup): boolean {
    return Object.values(group.controls).some(control => {
      if (control instanceof FormControl) {
        return control.valid && control.value !== '';
      }
      if (control instanceof FormGroup) {
        return this.isSearchButtonEnabledInGroup(control);
      }
      return false;
    });
  }









}
