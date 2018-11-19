import {Component} from '@angular/core';
import {CarsHttpService} from './cars.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})


export class AppComponent {

    cars = [];

    constructor(private carsHttpServ: CarsHttpService) {
    }

    loadCars() {

        this.carsHttpServ.getCars().subscribe((cars) => {
            this.cars = cars;
        });
    }
}
