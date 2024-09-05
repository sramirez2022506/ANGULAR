import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  inputValue: string = '';

  onInputChange(event: any): void {
    this.inputValue = event.target.value;
  }


}
