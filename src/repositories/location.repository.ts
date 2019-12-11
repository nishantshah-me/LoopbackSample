import { DefaultCrudRepository } from '@loopback/repository';
import { Location, LocationRelations } from '../models/location.model';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype.id,
  LocationRelations
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Location, dataSource);
  }
}
