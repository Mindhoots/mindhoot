import { Component } from '@angular/core';
import { PricingComponent } from '../pricing-component/pricing-component';
import { FaqComponent } from '../faq-component/faq-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-tm-component',
  imports: [PricingComponent, FaqComponent, FooterComponent],
  templateUrl: './tm-component.html',
  styleUrl: './tm-component.css',
})
export class TmComponent {

  /// amount in dollars
  economyPlan = {
    amount: "400",
    name: 'Economy',
    details: [
      "10users per org",
      "5projects per org",
      "100 tasks per org",
      "10gb storage",
      "2months history",
      "No customization",
    ]
  };
  premiumPlan = {
    amount: "600",
    name: 'Premium',
    details: [
      "20users per org",
      "10projects per org",
      "300 tasks per org",
      "20gb storage",
      "6months history",
      "No customization",
    ]
  };
  plusPlan = {
    amount: "1000",
    name: 'Premium Plus',
    details: [
      "unlimited users",
      "unlimited projecs",
      "unlimted tasks",
      "unlimited storage",
      "One year history",
      "Limited customization",
    ]
  };
  customerPlan = {
    amount: "",
    name: 'Custom',
    details: [
      "Unlimited per org",
      "Unlimited per org",
      "Unlimited per org",
      "Unlimited storage",
      "Unlimited history",
      "Full Customization",
    ]
  };

}
