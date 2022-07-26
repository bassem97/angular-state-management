import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {CustomerState} from "../store/reducer/customer.reducer";
import {selectCustomers} from "../store/selector/customer.selectors";
import {Observable} from "rxjs";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$: Observable<Customer[]>;


  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  ngOnInit(): void {
  }

}
