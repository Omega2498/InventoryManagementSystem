import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { Dealer } from '../dealer';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent implements OnInit {

  dealers: Observable<Dealer[]> | undefined;

  constructor(private as: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.dealers = this.as.getDealersList();
  }

}
