import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  getRandomUserIndex = () => {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  };

  selectedUser = signal(DUMMY_USERS[this.getRandomUserIndex()]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser = () => {
    this.selectedUser.set(DUMMY_USERS[this.getRandomUserIndex()]);
  };
}
