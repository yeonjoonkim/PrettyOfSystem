//Import Environment
import { environment } from 'src/environments/environment';

//Import App Module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import Ionic Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Import Component
import { MenuComponent } from './shared/components/menu/menu.component';
import { LangaugeSelectionComponent } from './shared/components/langauge-selection/langauge-selection.component';


//Import Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//Import Pipe
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Language Package
import { LanguageTransformPipeModule } from './shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { EditorModule } from '@progress/kendo-angular-editor';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { FilterModule } from '@progress/kendo-angular-filter';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { GridModule } from '@progress/kendo-angular-grid';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { PagerModule } from '@progress/kendo-angular-pager';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { UploadsModule } from '@progress/kendo-angular-upload';






























@NgModule({
  declarations: [AppComponent, MenuComponent, LangaugeSelectionComponent],
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    LanguageTransformPipeModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    ChatModule,
    DateInputsModule,
    DialogsModule,
    DropDownsModule,
    EditorModule,
    ExcelExportModule,
    FilterModule,
    GaugesModule,
    GridModule,
    IndicatorsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    ListBoxModule,
    MenuModule,
    NavigationModule,
    PagerModule,
    PDFExportModule,
    ProgressBarModule,
    SchedulerModule,
    ScrollViewModule,
    TooltipsModule,
    ToolBarModule,
    UploadsModule,
  ],
  exports: [],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {
}
