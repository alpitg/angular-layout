import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ThemeService } from '../services/theme.service';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {
  public title = 'lucid';
  public isStopLoading = false;
  public showNotifMenu = false;
  public showToggleMenu = false;
  public navTab = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu;
  public themeClass = 'theme-cyan';
  public smallScreenMenu = '';

  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title
  ) {
    this.activatedRoute.url.subscribe(url => {
      this.isStopLoading = false;
      this.getActiveRoutes();
    });

    this.themeService.themeClassChange.subscribe(themeClass => {
      this.themeClass = themeClass;
    });

    this.themeService.smallScreenMenuShow.subscribe(showMenuClass => {
      this.smallScreenMenu = showMenuClass;
    });
  }

  ngOnInit() {
    const that = this;
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        that.themeService.hideMenu();
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
      )
      .subscribe(event => this.titleService.setTitle(event.title));
  }

  toggleNotificationDropMenu() {
    this.showNotifMenu = !this.showNotifMenu;
  }

  toggleSettingDropMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit() {
    const that = this;
    setTimeout(() => {
      that.isStopLoading = true;
    }, 1000);
  }

  getActiveRoutes() {
    const segments: Array<string> = this.router.url.split('/');
    console.log(segments);
    this.currentActiveMenu = segments[2];
    this.currentActiveSubMenu = segments[3];
  }

  activeInactiveMenu($event) {
    if ($event.item && $event.item === this.currentActiveMenu) {
      this.currentActiveMenu = '';
    } else {
      this.currentActiveMenu = $event.item;
    }
  }
}
