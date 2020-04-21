import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../../services/get-info.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'world-bank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regionData = [];
  code;

  constructor( private getInfoService: GetInfoService,
              private activatedRouter: ActivatedRoute,
               private router: Router

  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.getInfoService.getCountries(params['code']).subscribe(data => {
      this.regionData = data[1];
      console.log(this.regionData);
      });
    })
  }

  goToCountry(i) {
    console.log('is working!', i);
    this.router.navigate(['/country', i]);
  }

}



