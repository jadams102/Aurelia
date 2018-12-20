import { Injectable, Inject } from '@angular/core';
import { Resource } from '../models/resource.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ResourceService {
    resources: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
        this.resources = database.list('resources')
    }

    getResoruces() {
        return this.resources;
    }

    addResources(newResource: Resource) {
        this.resources.push(newResource);
    }

    getResourceById(resourceId: string) {
        return this.database.object('resources/' + resourceId)
    }

    updateResource(localUpdatedResource) {
        const resourceEntryInFirebase = this.getResourceById(localUpdatedResource.$key);
        resourceEntryInFirebase.update({title: localUpdatedResource.title,
                                    body: localUpdatedResource.body,
                                    date: localUpdatedResource.date})
    }

    deleteResource(localResource) {
        const resourceEntryInFirebase = this.getResourceById(localResource.$key);
        resourceEntryInFirebase.remove();
    }
}