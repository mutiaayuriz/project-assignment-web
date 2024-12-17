import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { ListService } from '../service/api/list.service';
import { Country } from '../service/interface/list.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatTabsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  constructor(private service: ListService, private route: Router) {}
  displayedColumns: string[] = ['name', 'flag'];
  data: Array<Country> = [];
  dataSource = new MatTableDataSource<Country>(this.data);

  dataKerjasama: Array<Country> = [];
  dataSourceKerjasama = new MatTableDataSource<Country>(this.dataKerjasama);
  totalData = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.service.getAllCountryList().subscribe((response) => {
      if (response) {
        this.data = response;
        this.dataSource = new MatTableDataSource<Country>(this.data);
        this.dataSource.paginator = this.paginator;
      }
    });

    let getDataKerjasama: any = localStorage.getItem('kerjasama');
    if (getDataKerjasama !== null) {
      this.dataKerjasama = JSON.parse(getDataKerjasama);
    }
  }

  detailCountry(row: Country) {
    localStorage.setItem('selectedCountry', JSON.stringify(row.name.common));
    this.route.navigate(['/detail']);
  }

  selectTab(value: any) {
    if (value.index === 1) {
      this.dataSource = new MatTableDataSource<Country>(this.dataKerjasama);
      this.totalData = this.dataKerjasama.length;
    } else {
      this.dataSource = new MatTableDataSource<Country>(this.data);
    }
    this.dataSource.paginator = this.paginator;
  }
}
