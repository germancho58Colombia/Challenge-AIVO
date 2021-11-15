import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amb-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() heroe: any = {};
  // @Input() id: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.heroeSeleccionado.emit()  //this.index
    // console.log(this.index);
    // this.router.navigate(['/heroe',this.index])

  }

}
