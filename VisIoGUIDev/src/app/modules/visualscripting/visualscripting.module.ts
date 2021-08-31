import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualscriptingComponent } from './visualscripting.component';
import {ReteModule} from 'rete-angular-render-plugin';
import { NumberNgComponent } from './controls/number/number-ng.component';
import { SelectNgComponent } from './controls/select/select-ng.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTreeModule} from '@angular/material/tree';
import {PortalModule} from '@angular/cdk/portal';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RunbtnComponent } from './controls/runbtn/runbtn.component';
import {MatFormFieldModule} from '@angular/material';
import { RunStatusNgComponent } from './controls/run-status/run-status.component';
import {CheckNgComponent} from './controls/check/check-ng.component';
import {LoadingNgComponent} from './controls/loading/loading-ng.component';
import {LottieModule} from 'ngx-lottie';


@NgModule({
  declarations: [
    VisualscriptingComponent,
    NumberNgComponent,
    SelectNgComponent,
    RunbtnComponent,
    RunStatusNgComponent,
    CheckNgComponent,
    LoadingNgComponent
  ],
  exports: [
    VisualscriptingComponent,
    ReteModule
  ],
    imports: [
        LottieModule,
        CommonModule,
        ReteModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule
    ],
  entryComponents: [
    NumberNgComponent,
    SelectNgComponent,
    RunbtnComponent,
    RunStatusNgComponent,
    CheckNgComponent,
    LoadingNgComponent
  ]
})
export class VisualscriptingModule { }
