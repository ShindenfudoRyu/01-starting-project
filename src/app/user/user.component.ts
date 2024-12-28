import { Component, computed, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  name = input.required<string>();
  avatar = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());
  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  onSelectUser() {}
}
