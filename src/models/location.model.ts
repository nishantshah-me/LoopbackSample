/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entity, model, property } from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Location
 * Location
 */
@model({ name: 'Location' })
export class Location extends Entity {
  constructor(data?: Partial<Location>) {
    super(data)
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   *
   */
  @property({
    required: true, id: true
  })
  id: number;

  /**
   *
   */
  @property({ required: false })
  address: string;

  /**
   *
   */
  @property({ required: false })
  city: string;

  /**
   *
   */
  @property({ required: false })
  state: string;

  /**
   *
   */
  @property({ required: false })
  country: string;

  /**
   *
   */
  @property({ required: true })
  lat: number;

  /**
   *
   */
  @property({ required: true })
  'long': number;

  /**
   *
   */
  @property({ required: false })
  zip: number;


}

export interface LocationRelations {

}

export type LocationWithRelations = Location & LocationRelations
