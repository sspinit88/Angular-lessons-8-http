import {Component} from '@angular/core';
import {CarsHttpService} from './cars.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

// interface ICars {
//     name: string;
//     color: string;
//     id: number;
// }

export class AppComponent {

    cars = [];

    constructor(private carsHttpServ: CarsHttpService) {
    }

    loadCars() {

        this.carsHttpServ.getCars().subscribe((cars: any[]) => {
            this.cars = cars;
        });
    }
}
