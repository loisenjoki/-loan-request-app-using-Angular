import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'User',
    main: [
      {
        state: 'dashboard',
        name: 'Home',
        type: 'link',
        icon: 'ti-home'
      }
    ],
  },
/*  {
    label: 'Profile',
    main: [
      {
        state: 'basic',
        name: 'Basic Components',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'button',
            name: 'Button'
          },
          {
            state: 'typography',
            name: 'Typography'
          }
        ]
      },
      {
        state: 'notifications',
        name: 'Notifications',
        type: 'link',
        icon: 'ti-crown'
      }
    ]
  },*/
  {
    label: 'Loan',
    main: [
      {
        state: 'forms',
        name: 'Request Loan',
        type: 'link',
        icon: 'ti-money'
      }
    ]
  },
  {
    label: 'Statements',
    main: [
      {
        state: 'bootstrap-table',
        name: 'View Statements',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
