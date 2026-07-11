import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from '../components/layouts/main-layout/main-layout';
import { MainHeader } from '../components/ui/main-header/main-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout, MainHeader],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular');
}
