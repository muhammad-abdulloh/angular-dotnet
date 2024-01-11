import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
  fruit2: string;
  fruit3: string;
  fruit4: string;
}

export interface Products {
  id: string,
  productName: string;
  category: string;
  condition: string;
  price: number;
  comment: string;
  date: string
}

/*

    "id": 1,
    "productName": "string",
    "category": "string",
    "condition": "string",
    "price": 0,
    "comment": "string",
    "date": "2024-01-10T15:13:44.294"



*/

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'ProductName', 'Category', 'Condition', 'Price', 'Comment', 'Date'];
  users: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private productService: ProductService) {
    

    // Assign the data to the data source for the table to render
  }
  
  priducts: Products[] = [] ;
  ngOnInit(){

    const users = [
      { id: 1, name: 'Kristiyan' },
      { id: 2, name: 'Emiliyan' },
      { id: 3, name: 'Denitsa' },
    ];

    this.getAllProductsMethod();

  }

   getAllProductsMethod(){
    
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.productService.getAllProducts().subscribe(
      {
        next: (response) => {
          this.priducts = response;
          console.log(this.users);
          alert("Malumotlar olib kelindi")
        },
        error: (err) => {
          alert("nimadur hato ketti")
        }
      }
    );
  }
  
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): Products {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    productName: name,
    condition: Math.round(Math.random() * 100).toString(),
    category: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    comment: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    price: Math.round(Math.random() * (FRUITS.length - 1)),
    date: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
