import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})

export class InputComponent {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() disabled: boolean = false;
  @Input() required: boolean = true;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
