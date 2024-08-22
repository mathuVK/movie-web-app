import { Component, Input } from '@angular/core';  // Remove 'input'
import { config } from 'rxjs';
import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control-config.iterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.scss']  // Fixed typo (styleUrl -> styleUrls)
})
export class SegmentedControlComponent {
  @Input() config : SegmentedControlConfig[] =[];  // Added parentheses after @Input
  
  selectedItem(segment : SegmentedControlConfig){
    this.config.map((item: SegmentedControlConfig)=>{
      item.active=segment.name ==item.name

    }

    )

  }
}
