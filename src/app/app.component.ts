import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [CarsService]
})

interface ICars {
    name: string;
    color: string;
    id: number;
}


export class AppComponent implements OnInit {

    cars: ICars[] = [];

    constructor(private CarService: CarsService) {
    }

    ngOnInit(): void {
        this.loadCars();
        this.CarService.change.subscribe(cars => {
            if (cars) {
                console.log(cars);
                this.cars = cars;
            }
        });
    }

    loadCars() {
        let a: any;
        a = 5;
        this.CarService.change.emit(a);
    }
}
