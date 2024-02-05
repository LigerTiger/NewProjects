import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtherentimentownermappingService } from './otherentimentownermapping.service';
// import { CommonModalService } from 'src/app/components/common-modal/common-modal.service';
import { CommonModalService } from '../../../../components/common-modal/common-modal.service';


@Component({
  selector: 'app-otherentimentownermapping',
  templateUrl: './otherentimentownermapping.component.html',
  styleUrls: ['./otherentimentownermapping.component.scss']
})
export class OtherentimentownermappingComponent {
  empAdid:any;
  empName:any;
  nameType:any;
  data:any;
  data1:any;
  isUpdateButtonVisible: boolean = false;
  idForUpdate:any;
  editDetails:any
  tableData:any
  otherSrID:any;
  OnSubmit1:any;
  isUpdateValueMess:boolean = false;
  isVerifySuccessfullyMess: boolean = false;
  isVerifyUnSuccessfullyMess: boolean =false;
  deleteSuccessMessage: boolean = false;
  submitted = false;
  showSubmitButton: boolean= false;
  showUpdateButton: boolean= false;
  showDeleteButton: boolean= false;
  
//   myForm = new FormGroup({
//     nameType: new FormControl('',Validators.required),
//     empAdid: new FormControl('',Validators.required),
//     empName: new FormControl('',Validators.required),
//     businessUnit: new FormControl('',Validators.required),
//     corporateDesignation: new FormControl(''),
//     functionalDesignation: new FormControl(''),
//     isActive: new FormControl('')
    
// });
  constructor( private modalService: CommonModalService ,private fb: FormBuilder, private otherentimentownermappingService: OtherentimentownermappingService) {}

  myForm = this.fb.group({
    type: [''],
    empAdid: ['',[Validators.pattern(/[a-zA-Z0-9]+$/),Validators.required]],
    employeeName: [''],
    businessUnit: [''],
    corporateDesignation: [''],
    functionalDesignation: [''],
    isActive: [''],

    // [Validators.pattern(/^[a-zA-Z\s]*$/),Validators.required]
  });


  // this.modalService.openModal('Success', 'Data Uploaded Successfully!',"success");      
  //     this.modalService.openModal('Error', 'Something error to save data!',"error");      
  //         this.modalService.openModal('Invalid', 'Please fill all required  Data!',"invalid");      

  ngOnInit() {
    this.getData();
      this.showSubmitButton = true;
  }

  // for validation
  get appControlforEmpAid(){
    return this.myForm.get("empAdid")
  }
  get appControlforEmpName(){
    return this.myForm.get("employeeName")
  }
  get appControlforbusinessUnit(){
    return this.myForm.get("businessUnit")
  }
  get appControlforcorporateDesignation(){
    return this.myForm.get("corporateDesignation")
  }
  get appControlforfunctionalDesignation(){
    return this.myForm.get("functionalDesignation")
  }
  

  otherEntitlementOwnerMappingSrNo:any
  onVerify(){

  this.empAdid=this.myForm.controls.empAdid.value;
  this.nameType=this.myForm.controls.type.value;
  this.idForUpdate =this.empAdid;
  console.log(this.myForm.value.isActive);
  this.showSubmitButton =true

  // Calling Service File To Get Data
  this.otherentimentownermappingService.getData(this.empAdid,this.nameType).subscribe((value: any)=>{
  this.modalService.openModal('Success', 'Verify Successfully!',"invalid");  
    // this.isVerifySuccessfullyMess = true;
    // setTimeout(()=>{
    //   this.isVerifySuccessfullyMess = false
    // },3000)

  this.data=value;
  console.log(value);
  console.log(value.otherEntitlementOwnerMappingSrNo);
  
  this.otherEntitlementOwnerMappingSrNo = value.otherEntitlementOwnerMappingSrNo
  this.otherSrID = value.otherEntitlementOwnerMappingSrNo
  console.log(this.otherSrID);
  
    // For Fetch Value In HTML
     this.myForm.patchValue({
      // nameType:this.data.type,
      employeeName: this.data.employeeName,
      businessUnit: this.data.businessUnit,
      corporateDesignation: this.data.corporateDesignation,
      functionalDesignation: this.data.functionalDesignation,
      isActive: this.data.isActive
     })
    
    // For Fetch Value In HTML

   })
 
  }

  OnSubmit(){
     this.showSubmitButton = true;
    this.otherentimentownermappingService.onSubmit(this.myForm.value).subscribe((res) => {
      // this.showSubmitButton = true;
      this.OnSubmit1 = res
      console.log(this.OnSubmit1);
      


    })
  }


  // Name is not geting from your side 

update(){

  if(this.myForm.invalid){
    this.modalService.openModal('Invalid', 'Please fill all required (*)  Data!',"invalid"); 
    this.submitted = true
  }
  else{

  
  console.log("new object",this.newobject);
  
  this.empAdid=this.myForm.controls.empAdid.value;
  // this.empName=this.myForm.controls.empName.value;
  console.log(this.myForm.value)
  var data = this.myForm.value
  console.log(data,"data");
  console.log(this.newobject);
  //OtherEntitlementOwnerMappingSrNo

  var dd = {
    empAdid: this.myForm.value.empAdid,
    employeeName: this.myForm.value.employeeName,
    businessUnit: this.myForm.value.businessUnit,
    corporateDesignation: this.myForm.value.corporateDesignation,
    functionalDesignation: this.myForm.value.functionalDesignation,
    isActive: this.myForm.value.isActive,
    // otherEntitlementOwnerMappingSrNo: this.editDetails != undefined ? this.editDetails[0]?.otherEntitlementOwnerMappingSrNo : this.otherEntitlementOwnerMappingSrNo
   }
   console.log(dd);
   
  this.otherentimentownermappingService.updateEmpid(this.empAdid, dd).subscribe((value:any)=>{
    this.modalService.openModal('Success', 'Data Uploaded Successfully!',"success"); 
    this.submitted = true
    console.log(value)
  this.isUpdateValueMess = true
  // this.getData();

  setTimeout(()=>{
    this.isUpdateValueMess = false
  },3000)

  },(err)=>{
  console.log(err)
  })
}
}

getData(){
  this.otherentimentownermappingService.getListValue().subscribe((res)=>{
    this.tableData = res;
  })
}
newobject:any
// editItem(id:any){
//   this.otherentimentownermappingService.editValue(id).subscribe((res)=>{
//     this.editDetails = res;
//     console.log(this.editDetails,"=================");
//     // this.newobject=[
//     //   {
//     //     srNo:this.tableData[0].srNo,
//     //     type:this.tableData[0].type,
//     //     empAdId:this.tableData[0].empAdId,
//     //     createdOn:this.tableData[0].createdOn,
//     //     createdBy:this.tableData[0].createdBy,
//     //     modifiedOn:this.tableData[0].modifiedOn,
//     //     isModified:this.tableData[0].isModified,
//     //     active:this.tableData[0].active
//     //   }
//     // ]
   
//     // console.log('...',this.newobject);
//     this.otherEntitlementOwnerMappingSrNo = this.otherEntitlementOwnerMappingSrNo
//     console.log(this.editDetails.employeeName);
//     this.myForm.patchValue({

//       empAdid:this.editDetails?.empAdid,
//       employeeName: this.editDetails?.employeeName,
//       businessUnit: this.editDetails.businessUnit,
//       corporateDesignation: this.editDetails.corporateDesignation,
//       functionalDesignation: this.editDetails.functionalDesignation,
//       isActive: this.editDetails.isActive,
      
//     })
    
//   })
// }

// otherEntitlementOwnerMappingType:any;
editItem(id: any) {
  this.otherentimentownermappingService.editValue(id).subscribe((res) => {
    this.showUpdateButton = true;
    this.showSubmitButton = false;
    this.editDetails = res;
    console.log(this.editDetails, "=================");
    console.log( this.editDetails.corporateDesignation);

    // this.otherEntitlementOwnerMappingType = this.editDetails.otherEntitlementOwnerMapping.type;
    // console.log("Type-----------",this.otherEntitlementOwnerMappingType);
    

    // Ensure all form controls are patched safely
    console.log(this.editDetails.type,)
    this.myForm.patchValue({type:this.editDetails[0]?.type,
      empAdid: this.editDetails[0]?.empAdid,
      employeeName: this.editDetails[0]?.employeeName,
      businessUnit: this.editDetails[0]?.businessUnit,
      corporateDesignation: this.editDetails[0]?.corporateDesignation,
      functionalDesignation: this.editDetails[0]?.functionalDesignation,
      isActive: this.editDetails[0]?.isActive,
      
    });
  });
}

deleteUserData(id:string,srNo:Number){

  this.otherentimentownermappingService.deleteUser(id,srNo).subscribe(()=>{
    this.showDeleteButton = true;
    console.log("delete succesfully");
    this.getData();
    // this.successMessage="Record Deleted Successfully";
    this.deleteSuccessMessage=true;
    setTimeout(() => {
      this.deleteSuccessMessage=false;
    }, 10000);
  })
}

// edit(data:any){
//   // this.showUpdateButton=true;
//   // this.submitButton = false;
//   // this.searchButton = false;
//   // this.cancelButton= true;
//   // this.modelpopupedit=true;
//   // this.editId = data.id; 
//   this.myForm.patchValue({
// type:this.dtype,
//     empName: this.data.employeeName,
//     businessUnit: this.data.businessUnit,
//     corporateDesignation: this.data.corporateDesignation,
//     functionalDesignation: this.data.functionalDesignation,
//     isActive: this.data.isActive
//   })

// }


// getDataById(itemId: number) {
//   return {
//       type: 'OS',
//       empAdid: 'SSES374014',
//       empName: 'Employee Name',
//       businessUnit: 'Business and Digital Technology Solutions Group',
//       corporateDesignation: 'Corporate Designation',
//       functionalDesignation: 'Functional Designation',
//       isActive: 'Active'
//   };
// }

  resetForm(){
    this.myForm.reset();
    this.myForm.patchValue({
       type:"",
    })
  }

  // isTypeInvalid() {
  //   const control = this.myForm.get('type');
  //   return control?.hasError('invalidType') && control.touched;
  // }


}
