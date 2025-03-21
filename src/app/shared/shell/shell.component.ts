import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbar } from '@angular/material/toolbar';
import { MatNavList } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  imports: [MatSidenavContainer, MatSidenavContent, MatSidenav, MatToolbar, MatNavList, CommonModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
