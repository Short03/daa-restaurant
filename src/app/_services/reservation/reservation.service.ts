import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/_models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [
  {
    name: 'Adrian Short',
    email: 'adrian_short97@hotmail.com',
    phone: '8114842840',
    people: 2,
    reservationDate: new Date('2023-03-30T06:00:00.000Z'),
    reservationSchedule: 7,
  },
  {
    name: 'Adrian Short',
    email: 'adrian_short97@hotmail.com',
    phone: '8114842840',
    people: 2,
    reservationDate: new Date('2023-03-30T06:00:00.000Z'),
    reservationSchedule: 7,
  },
  {
    name: 'Adrian Short',
    email: 'adrian_short97@hotmail.com',
    phone: '8114842840',
    people: 2,
    reservationDate: new Date('2023-03-30T06:00:00.000Z'),
    reservationSchedule: 7,
  },
  {
    name: 'Adrian Short',
    email: 'adrian_short97@hotmail.com',
    phone: '8114842840',
    people: 2,
    reservationDate: new Date('2023-03-30T06:00:00.000Z'),
    reservationSchedule: 7,
  },
  {
    name: 'Adrian Short',
    email: 'adrian_short97@hotmail.com',
    phone: '8114842840',
    people: 2,
    reservationDate: new Date('2023-03-30T06:00:00.000Z'),
    reservationSchedule: 7,
  },
];

  constructor() { }

  getReservations(): Reservation[]{
    return this.reservations;
  }

  deleteReservation(){
    alert('Botón de borrado activado.');
  }
}
