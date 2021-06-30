import {Component} from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  panelOpenState = false;
  details:any;
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAngularConcepts().subscribe(data => {
      this.details = data;
    })
  }
}

