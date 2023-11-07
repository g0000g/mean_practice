import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'eshop-home-page',
    standalone: true,
    imports: [CommonModule, ButtonModule, AccordionModule, TableModule],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {}
