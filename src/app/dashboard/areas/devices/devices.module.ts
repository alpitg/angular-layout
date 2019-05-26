import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceListService } from './services/device-list.service';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  providers: [DeviceListService]
})
export class DevicesModule { }
