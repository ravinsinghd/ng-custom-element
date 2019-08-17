import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const PopupElement = createCustomElement(AppComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }

  ngDoBootstrap() {}
}
