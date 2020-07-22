import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OneServiceService } from '../one-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  status = 'Formulario no enviado';
  defaultName = 'Andrés';
  displayPassword = false;
  lightStatus = '';
  names = ['hugo', 'paco', 'luis'];
  errorMessage = '';

  @Input() child: string;
  @Output() childEvent = new EventEmitter();

  courses = [];

  constructor(private service: OneServiceService) { }

  ngOnInit(): void {
    this.service.getCourses().subscribe(data => this.courses = data,
                                        error => this.errorMessage = error);
  }

  onSendForm(email): void{
    console.log(this.courses);
    this.status = 'OK';
    this.displayPassword = true;
    this.lightStatus = email;
  }

  onDefaultForm(): void{
    this.defaultName = 'Paco';
  }

  onSendEvent(): void{
    this.childEvent.emit('hello world father!');
  }

}
