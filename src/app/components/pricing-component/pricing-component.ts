import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-pricing-component',
  imports: [CommonModule, MatDividerModule],
  templateUrl: './pricing-component.html',
  styleUrl: './pricing-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PricingComponent {
  pricing = input<PricingObj>();
}


interface PricingObj {
  amount: string;
  name: string;
  details: Array<string>;
}