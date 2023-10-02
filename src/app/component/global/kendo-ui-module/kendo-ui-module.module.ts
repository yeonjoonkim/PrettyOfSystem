import 'hammerjs';

//Angular
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//KENDO UI
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { EditorModule } from '@progress/kendo-angular-editor';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { GridModule } from '@progress/kendo-angular-grid';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { MenusModule } from '@progress/kendo-angular-menu';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { PagerModule } from '@progress/kendo-angular-pager';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { UtilsModule } from '@progress/kendo-angular-utils';
import { FormFieldModule } from '@progress/kendo-angular-inputs';

//DATA QUERY
//https://www.telerik.com/kendo-angular-ui/components/data-query/get-started/
import { process, orderBy, filterBy } from '@progress/kendo-data-query';

//DATE MATH
//https://www.telerik.com/kendo-angular-ui/components/date-math/get-started/
import { weekInYear, addDays } from '@progress/kendo-date-math';

//DRAWING
//https://www.telerik.com/kendo-angular-ui/components/drawing/get-started/
import { Text, geometry } from '@progress/kendo-drawing';

//FILE SAVER
//https://www.telerik.com/kendo-angular-ui/components/file-saver/get-started/
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

@NgModule({
  declarations: [],
  exports: [
    FormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    IntlModule,
    LabelModule,
    BarcodesModule,
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    DropDownsModule,
    EditorModule,
    GaugesModule,
    GridModule,
    IndicatorsModule,
    InputsModule,
    LayoutModule,
    ListViewModule,
    MenusModule,
    NavigationModule,
    PagerModule,
    PDFExportModule,
    ProgressBarModule,
    SchedulerModule,
    ScrollViewModule,
    TooltipsModule,
    ToolBarModule,
    UploadsModule,
    UtilsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class KendoUiModule {}
