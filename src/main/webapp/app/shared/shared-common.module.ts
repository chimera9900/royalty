import { NgModule } from '@angular/core';

import { JRoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JRoyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JRoyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JRoyaltySharedCommonModule {}
