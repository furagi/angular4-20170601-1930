import { Route } from '@angular/router';

import { MailListComponent } from './mail-box/mail-list/mail-list.component';
import { MailViewComponent } from './mail-box/mail-view/mail-view.component';
import { ContactsComponent } from './mail-box/contacts/contacts.component';
import { WidgetComponent } from './wiki/widget/widget.component';
import { SettingsComponent } from './mail-box/settings/settings.component';

import { EmailsResolver } from './resolves/emails.resolver';
import { AuthorsResolver } from './resolves/authors.resolver';
import { ContactsResolver } from './resolves/contacts.resolver';

const routes: Route[] = [
  { path: '', redirectTo: '/inbox', pathMatch : 'full' },
  {
    path: 'inbox',
    component: MailListComponent,
    resolve: {
      emails: EmailsResolver,
      authors: AuthorsResolver
    },
    data: {
      title: 'Inbox'
    }
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsResolver
    },
    data: {
      title: 'Contacts'
    },
    // canActivate: [AuthGuardService]
  },
  {
    path: 'wiki',
    component: WidgetComponent,
    data: {
      title: 'Wiki'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
    }
  }
];

export default routes;
