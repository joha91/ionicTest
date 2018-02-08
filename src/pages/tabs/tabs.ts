import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CurrentTemperaturePage } from '../currentTemperature/currentTemperature';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabCurrentTemp = CurrentTemperaturePage;
  tab2Root = AboutPage;

  constructor() {

  }
}
