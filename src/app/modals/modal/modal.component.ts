import { Component, OnInit } from '@angular/core';


@Component({
   selector: 'app-modal',
   templateUrl: './modal.component.html',
   styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

   constructor() { 
      
   }

   ngOnInit(): void {
   }

   openModal(id: string) {
      //this.modalService.open(id);
   }

   closeModal(id: string) {
      //this.modalService.close(id);
   } 


}


