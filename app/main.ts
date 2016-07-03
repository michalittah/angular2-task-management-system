import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './components/app.component';
import {LocalStorageService, LocalStorageSubscriber} from './services/local-storage/LocalStorageEmitter';

var appPromise = bootstrap(AppComponent, [ LocalStorageService ]);
// register LocalStorage, this registers our change-detection.
LocalStorageSubscriber(appPromise);