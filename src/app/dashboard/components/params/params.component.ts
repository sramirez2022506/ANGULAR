import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-params',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './params.component.html',
  styleUrl: './params.component.scss'
})
export class ParamsComponent implements OnInit{
  @Input() text: string = '';
  ngOnChanges(changes: SimpleChanges):void{
    console.log('se cambio el form', changes);
  }

  /*   onInputChange(value: string) {
    this.inputValue = value;
    console.log('Valor actual:', value);
  } */

  ngOnInit(): void {
    console.log('Inicio del form');
  }
}
