import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
	declarations: [],
	imports: [CommonModule, MatDialogModule, MatTabsModule],
	exports: [MatDialogModule, MatTabsModule],
})
export class MaterialModule {}
