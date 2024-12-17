import * as L from 'leaflet';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListService } from '../service/api/list.service';
import { Currencies } from '../service/interface/list.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatIconModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  constructor(private service: ListService) {}

  private dataSelected: any;
  private dataKerjasama: Array<any> = [];
  public dataDetail: any;
  public currencyType: Currencies = { name: '', symbol: '' };
  public languageType: string = '';
  public statusKerjasama: boolean = false;

  ngOnInit(): void {
    let getDataKerjasama: any = localStorage.getItem('kerjasama');
    this.dataKerjasama = JSON.parse(getDataKerjasama);
    this.dataSelected = localStorage.getItem('selectedCountry');

    if (this.dataKerjasama.length > 0) {
      this.statusKerjasama = this.dataKerjasama.find((value) => {
        if (value.name.common === JSON.parse(this.dataSelected)) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.service
      .getCountryByName(JSON.parse(this.dataSelected))
      .subscribe((response) => {
        if (response) {
          this.dataDetail = response[0];
          this.initCurrency(this.dataDetail.currencies);
          this.initLanguage(this.dataDetail.languages);
          this.initMap(this.dataDetail);
        }
      });
  }

  back() {
    window.history.back();
  }

  addKerjasama() {
    if (this.dataKerjasama.length > 0) {
      let checkDuplicate = this.dataKerjasama.find((value) => {
        if (value.name.common === this.dataDetail) {
          return true;
        } else {
          return false;
        }
      });
      if (!checkDuplicate) {
        this.dataKerjasama.push(this.dataDetail);
        localStorage.setItem('kerjasama', JSON.stringify(this.dataKerjasama));
        this.statusKerjasama = true;
      }
    } else {
      this.dataKerjasama.push(this.dataDetail);
      localStorage.setItem('kerjasama', JSON.stringify(this.dataKerjasama));
      this.statusKerjasama = true;
    }
  }

  cancelKerjasama() {
    let filterData = [];
    if (this.dataKerjasama.length > 1) {
      filterData = this.dataKerjasama.filter((value) => {
        if (value.name.common !== this.dataDetail.name.common) {
          return value;
        }
      });
    }

    localStorage.setItem('kerjasama', JSON.stringify(filterData));
    this.statusKerjasama = false;
  }

  private initMap(data: any) {
    const map = L.map('map').setView(data.latlng, 7);

    //osm layer
    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    osm.addTo(map);
    var marker = L.marker(data.capitalInfo.latlng).addTo(map);
    marker.bindPopup('<b>Capital of ' + data.name.common + '</b>').openPopup();
  }

  private initCurrency(data: any) {
    this.currencyType = data[Object.keys(data)[0]];
  }

  private initLanguage(data: any) {
    this.languageType = data[Object.keys(data)[0]];
  }
}
