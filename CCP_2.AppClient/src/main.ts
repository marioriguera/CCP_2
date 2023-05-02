import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'src/app/application/components/app/module/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
