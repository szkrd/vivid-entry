import { Component, Input, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ICredits } from '../../types/people';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {
  maxShown = 10;
  credit$: Observable<ICredits>;
  @Input() movieId: number;

  ngOnInit(): void {
    this.credit$ = ajax.getJSON(`${env.apiUrl}/movie/${this.movieId}/credits`);
  }
}
