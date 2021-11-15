import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Movies } from 'src/app/dashboard/domain/movies';
import { Movie } from 'src/app/dashboard/domain/movie';
import { Imagen } from 'src/app/dashboard/domain/images';
import { Poster } from 'src/app/dashboard/domain/poster';
import { MoviesDTO } from 'src/app/dashboard/domain/movies-dto';
import { PosterDTO } from 'src/app/dashboard/domain/poster-dto';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'amb-static-graph',
  templateUrl: './static-graph.component.html',
  styleUrls: ['./static-graph.component.css']
})
export class StaticGraphComponent implements OnInit {


  table: MoviesDTO[] = [];
  tableYears: MoviesDTO[] = [];
  tableSeries: MoviesDTO[] = [];
  count: number = 0;

  formGroupMovies: FormGroup;

  constructor(
    private moviesService: MoviesService,
    private readonly router: Router,
    private formBuilder: FormBuilder,

  ) {


    this.formGroupMovies = this.formBuilder.group({
      YearChange: [null],
      TitleChange: [null],
      OrderChange:[null],

    });

  }

  ngOnInit() {

    this.movies(-1, "");

  }

  get f3() { return this.formGroupMovies.controls; }


  movies(FilterYear: number, FilterName: string) {

    this.moviesService.obtnerMovies().subscribe(data => {

      this.table = [];
      this.count = 0;
      var ressult = data;
      const currentArray = ressult.entries;

      // poster ART
      for (let index = 0; index < currentArray.length; index++) {

        const element = currentArray[index];
        const Movies_ = new MoviesDTO();
        const years_ = new MoviesDTO();
        const series_ = new MoviesDTO();

        Movies_.id = index;
        Movies_.description = element.description;
        Movies_.title = element.title;
        Movies_.releaseYear = element.releaseYear;
        Movies_.programType = element.programType;

        // yeras
        var year = this.tableYears.filter(x => x.releaseYear == element.releaseYear);

        if (year.length == 0) {
          years_.releaseYear = element.releaseYear;
          this.tableYears.push(years_);
        }

        // series
        var serie = this.tableYears.filter(x => x.title == element.title);

        if (serie.length == 0) {
          series_.title = element.title;
          this.tableSeries.push(series_);
        }

        // url imagen
        for (var propertie in element.images) {
          for (var propertieNameColum in element.images[propertie]) {
            if (propertieNameColum = "url") {
              Movies_.url = element.images[propertie][propertieNameColum];
            }

          }
        }

        // filters
        if (FilterYear == Movies_.releaseYear || FilterYear == -1 || FilterName == Movies_.title || FilterName == "TODOS") {

          this.table.push(Movies_);

        }

      }

      this.count = this.table.length;
      this.table.sort();
    

      //--
      // this.tableSeries.sort()
      // this.tableYearsOrder= this.tableYears.sort()
      // var a=1;
      //--

    });

  }

  onOrderChange( )
  {
    // this.table.sort((a., b) => (a.releaseYear < b.releaseYear ? -1 : 1));
  
    var items = this.table;

 

  }
  onYearChange() {

    this.movies(this.f3.YearChange.value, "");

    this.f3.TitleChange.value;

  }
  onTitleChange() {

    this.movies(-2, this.f3.TitleChange.value);

  }





}

