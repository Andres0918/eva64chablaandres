import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"eva64chablaandres","appId":"1:724959238882:web:e4c4b45ef7c1ff14379cbb","storageBucket":"eva64chablaandres.appspot.com","apiKey":"AIzaSyC83GdXIwLL94-COunht01p88-Fk3zkddc","authDomain":"eva64chablaandres.firebaseapp.com","messagingSenderId":"724959238882"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
