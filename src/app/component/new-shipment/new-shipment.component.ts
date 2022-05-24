import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-shipment',
  templateUrl: './new-shipment.component.html',
  styleUrls: ['./new-shipment.component.scss']
})
export class NewShipmentComponent implements OnInit {
  Pickuppoints:FormGroup
   BillShippment:FormGroup
   mindate=new Date()
   maxdate=new Date(2022,5,30)
  user:any={}
    constructor(private fb:FormBuilder,public translate:TranslateService) 
    {
     this.Pickuppoints=fb.group({
      shipper_name:['',[Validators.required,Validators.minLength(5)]],
      shipper_phone:['',[Validators.required,Validators.pattern("[0-9]{11}")]],
      pickup_date:['',[Validators.required]],
      address: fb.group({
        street: ['',[Validators.required]],
        postalCode: ['',[Validators.required]],
        city:['',[Validators.required]]
      }),
      commodities:['',[Validators.required]]
     
     });

     this.BillShippment=fb.group({
       OrderAmount:['',Validators.required],
       totalPrice:['',Validators.required]
     })
  
    
  
     }
  ngOnInit(): void {
  }
get shipper_name()
{
 return this.Pickuppoints.controls['shipper_name']
} 
get shipper_phone()
{
  return this.Pickuppoints.controls['shipper_phone']
}
get pickup_date(){
  return this.Pickuppoints.controls['pickup_date']
}
get address(){
  return this.Pickuppoints.controls['address']
}
get Avalibalecommodities(){
  return this.Pickuppoints.controls[' Avalibalecommodities']
}
get  NewAvalibalecommodities(){
  return this.Pickuppoints.controls[' Avalibalecommodities']
}
get commodities(){
  return this.Pickuppoints.controls['commodities']
}

get OrderAmount(){
  return this.BillShippment.controls['OrderAmount']
}

get totalPrice(){
  return this.BillShippment.controls['totalPrice']
}


// updateNewAvalibalecommodities() {
//   if (this.Avalibalecommodities.value == 'Specifiy Day')
//     this.Pickuppoints.controls['NewAvalibalecommodities'].setValidators([Validators.required]);
//   else
//     this.Pickuppoints.controls['NewAvalibalecommodities'].clearValidators();

//   this.Pickuppoints.controls['NewAvalibalecommodities'].updateValueAndValidity();
// }

saveForm(){

}
}
