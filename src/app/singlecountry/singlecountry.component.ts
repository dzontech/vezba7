import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleCountry } from '../models/singlecountry';
import { SinglecountryService } from '../singlecountry.service';

@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.component.html',
  styleUrls: ['./singlecountry.component.css']
})
export class SinglecountryComponent implements OnInit {

  singleCountries: SingleCountry[] = [];

  constructor(private singlecountryService: SinglecountryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // const common = String(this.route.snapshot.paramMap.get('singlecountry.name.common'));
    // this.getCountryByName(common);
    console.log(this.route.snapshot.paramMap.get('singlecountry.name.common'));
    

  }

  getCountryByName(common:string) {
    this.singlecountryService.getCountryByName(common).subscribe(data=>this.singleCountries=data);
  }

}
