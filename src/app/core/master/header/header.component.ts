import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public theme_dark = {
    '--primary': ' #101321',
    '--secondary': ' #222533',
    '--warning': ' #d3fc62',
    '--info': ' #a9b0b9',
    '--black': ' #000000',
    '--white': ' #ffffff',
    '--border-color': '#222533',
  };

  public theme_light = {
    '--primary': ' #ffffff',
    '--secondary': ' #222533',
    '--warning': ' #d3fc62',
    // '--info': ' #000000',
    '--black': ' #407798',
    '--white': ' #000000',
    // '--border-color': '#222533',
  };

  public theme: any;
  public isDark: boolean;

  ngOnInit(): void {
    this.isDark = JSON.parse(localStorage.getItem('theme') || '');
    this.isDark
      ? this.changeAppTheme(this.theme_dark)
      : this.changeAppTheme(this.theme_light);
  }

  /**
   * method to change the app theme
   * @param dynamicVariablesObject
   * @returns
   */
  public changeAppTheme(dynamicVariablesObject: any): void {
    if (Object.keys(dynamicVariablesObject)) {
      Object.entries(dynamicVariablesObject).forEach((element) => {
        document.documentElement.style.setProperty(
          element[0],
          element[1] as string
        );
      });
    }
    return;
  }

  /**
   * Method to toggle light dark theme
   */
  public changeMode() {
    this.isDark = !this.isDark;

    this.isDark
      ? this.changeAppTheme(this.theme_dark)
      : this.changeAppTheme(this.theme_light);
    let data = JSON.stringify(this.isDark);
    localStorage.setItem('theme', data);
  }
}
