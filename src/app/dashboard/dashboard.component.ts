import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormsComponent } from './components/forms/forms.component';
import { ParamsComponent } from './components/params/params.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsComponent, ParamsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  text= 'Valor 1'

  //cree un boton para cambiar el estado pero solo era para probar

 /*  handleClick(){
    this.text ='cambio el form';
  } */

  inputValue: string = '';

  onInputChange(event: any): void {
    this.inputValue = event.target.value;
  }

 constructor(cd: ChangeDetectorRef){
    setTimeout(() =>{
      this.text = 'Valor 2';
      cd.detectChanges();
    }, 10000)
  }
}
