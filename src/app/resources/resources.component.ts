import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resources.service';
import { Resource } from '../models/resource.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  
  addingResource: boolean;
  resources: FirebaseListObservable<any[]>
  user: Observable<firebase.User>


  constructor(private authService: AuthenticationService, private resourceService: ResourceService) { }

  ngOnInit() {
    this.resources = this.resourceService.getResoruces();
    this.addingResource = false;
    this.user = this.authService.authUser();
  }

  toggleNewResource() {
    if(!this.addingResource) {
      this.addingResource = true;
    } else {
      this.addingResource = false;
    }
  }

  deleteResource(resourceToDelete) {
    this.resourceService.deleteResource(resourceToDelete);
  }

  submitResource(name: string, link: string, description: string) {
    if (name === '') {
      return alert('Please enter a name')
    } else if (link === '') {
      return alert('Please enter a resource link')
    } else {
      this.addingResource = false;
      let newResource = new Resource(name, link, description)
      this.resourceService.addResources(newResource);
    }

  }

}
