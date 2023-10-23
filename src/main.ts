import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
import { birds } from './app/bird';
const myBird = new birds();
  myBird.BirdName = "Garchomp";
  myBird.Wingspan = "20cm";
  myBird.eggsize = 55;
console.log (myBird);
