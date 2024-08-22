import { Component } from '@angular/core';
import {NavBarComponent} from '../../components/nav-bar/nav-bar.component'
import { SegmentedControlComponent } from '../../components/segmented-control/segmented-control.component';
import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control-config.iterface';
import { HomeComponent } from '../home/home.component';
import { InputComponent } from '../../components/input/input.component';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { MovieCardConfig } from '../../interfaces/ui-config/movie-card-config.interface';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavBarComponent, SegmentedControlComponent, HomeComponent, InputComponent, RateChipComponent, MovieCardComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  segments: SegmentedControlConfig [] =[{
    name:'All',
    active :true
  },
  {
    name:'Movies',
    active :false
  },
  {
    name:'TV Shows',
    active :false
  },
]


movieCards: MovieCardConfig[]= [{
  img : 'https://pixabay.com/photos/mountains-sunrise-sunset-6818253/',
  rate : 2.852,
  movieNmae: 'Movie 1'

},
{
  img : 'https://pixabay.com/photos/air-show-aircraft-flugshow-4414576/',
  rate : 6.852,
  movieNmae: 'Movie 2'

},

]

}
