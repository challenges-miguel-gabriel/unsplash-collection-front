import { Component } from '@angular/core';
import { NewCollectionButtonComponent } from '../../shared/new-collection-button/new-collection-button.component';

@Component({
  selector: 'app-collections',
  imports: [NewCollectionButtonComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

}
