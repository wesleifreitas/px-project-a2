import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'example.component.html'
})

export class ExampleComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router) { }
    example() {
    }
}