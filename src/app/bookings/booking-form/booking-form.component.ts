import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Launch } from 'app/launchs/launch.model';
import { LaunchComponent } from 'app/launchs/launch/launch.component';
import { NotificationService } from 'app/shared/messages/notification.service';
import { Booking} from '../booking.model';
import { BookingService } from '../booking.service';


@Component({
  selector: 'bkn-booking-form',
  templateUrl: './booking-form.component.html'
})
export class BookingFormComponent implements OnInit {

  bookingForm :FormGroup
  booking: Booking
 
  launchs : Launch [] = []
  bookingToSave : Booking

  constructor(
    public bookingService: BookingService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { 
      
    }

  ngOnInit() {

    this.bookingService.getActiveTravelers();

    this.bookingForm = this.bookingService.getBookingForm();
    
  }

  create(){
    this.bookingService.create(this.bookingForm);

  }

  openLaunchDialog(launchIndex: any, bookingId: number):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={launchIndex, bookingId};
    this.dialog.open(LaunchComponent,dialogConfig);
  
  }

  removeLaunch(launchId : number,  index: number){
    this.bookingService.launchs.splice(index, 1);

  }
}
