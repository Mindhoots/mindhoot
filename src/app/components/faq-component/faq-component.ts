import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.html',
  styleUrl: './faq-component.css',
  imports: [MatExpansionModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {

  questions : Array<{question : string, answer : string, isOpened : boolean}>= [
    {
      "question": "Do I need to create an account?",
      "answer": "Yes, creating an account is required to access and use our software.",
      "isOpened" : false,
    },
    {
      "question": "How can I create a trial account?",
      "answer": "Trial accounts can only be created by our team. Please contact the company, and we will set up a trial account for you.",
      "isOpened": false,
    },
    {
      "question": "Is my data secure?",
      "answer": "We take data privacy seriously. Your information is not shared with third parties, and security best practices are followed to protect your tasks.",
      "isOpened": false,
    },
    {
      "question": "What should I do if I find a bug or issue?",
      "answer": "If you encounter any issues, please contact our support team so they can be fixed as quickly as possible.",
      "isOpened": false,
    },
  ]

}
