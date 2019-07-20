// import {Injectable} from '@angular/core';
// import {UserAccount} from '../../../exchange/models/user-account.model';
// import {BehaviorSubject} from 'rxjs';
// import {UserSystem} from '../../models/user-system.model';
// import {LocalModel, LocalStorage} from 'local-motive';
// import * as _ from 'lodash';
// import {JwtHelperService} from '@auth0/angular-jwt';

// @Injectable()
// export class LocalStorageService extends LocalModel {
//   @LocalStorage()
//   currentSystem: number;

//   @LocalStorage()
//   userSystems: UserSystem[];

//   @LocalStorage()
//   selectedSystem: UserSystem;

//   @LocalStorage()
//   canChangeSystem: boolean;

//   @LocalStorage()
//   isBucketSelected: boolean;

//   private systemSubject: BehaviorSubject<UserSystem>;

//   private tokenKey = 'token';
//   private tokenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   constructor(private jwtHelper: JwtHelperService) {
//     super('User');

//     this.systemSubject = new BehaviorSubject<UserSystem>(this.selectedSystem);
//   }

//   getDisplayName() {
//     if (!this.getData().displayName) {
//       return '';
//     }

//     return this.getData().displayName;
//   }

//   getFirstName() {
//     if (!this.getData().firstName) {
//       return '';
//     }

//     return this.getData().firstName;
//   }

//   getLastName() {
//     if (!this.getData().lastName) {
//       return '';
//     }

//     return this.getData().lastName;
//   }

//   getEmail() {
//     if (!this.getData().email) {
//       return '';
//     }

//     return this.getData().email;
//   }

//   getOrgName() {
//     if (!this.getData().orgName) {
//       return '';
//     }

//     return this.getData().orgName;
//   }

//   getUserId() {
//     if (!this.getData().userId) {
//       return '';
//     }
//     return this.getData().userId;
//   }

//   getId() {
//     if (!this.getData().Id) {
//       return '';
//     }
//     return this.getData().Id;
//   }

//   getUserRoles() {
//     if (_.isEmpty(this.getData().userRoles)) {
//       return [];
//     }

//     return this.getData().userRoles.split('&#&');
//   }

//   getToken(): string {
//     return localStorage.getItem(this.tokenKey);
//   }

//   getTokenSubject() {
//     return this.tokenSubject;
//   }

//   getSystemSubject() {
//     return this.systemSubject;
//   }

//   setSystemSubject(system: UserSystem): void {
//     this.systemSubject.next(system);
//   }

//   getCanChangeSystem(): boolean {
//     return this.canChangeSystem;
//   }

//   setCanChangeSystem(value: boolean): void {
//     this.canChangeSystem = value;
//   }

//   getBucketSelected(): boolean {
//     return this.isBucketSelected;
//   }

//   setBucketSelected(value: boolean): void {
//     this.isBucketSelected = value;
//   }

//   getSelectedSystemId() {
//     if (!this.selectedSystem) {
//       return null;
//     }
//     return this.selectedSystem.systemId;
//   }

//   getSelectedSystem(): UserSystem {
//     return this.selectedSystem;
//   }

//   setToken(token: string) {
//     localStorage.setItem(this.tokenKey, token);
//     this.tokenSubject.next(true);
//   }

//   setUserSystems(systems: UserSystem []) {
//     this.userSystems = systems;
//     if (_.isEmpty(this.selectedSystem)) {
//       this.selectedSystem = systems[0];
//     }
//   }

//   getUserSystems() {
//     return this.userSystems;
//   }

//   updateSelectedSystem(system: UserSystem) {
//     this.selectedSystem = system;
//     this.systemSubject.next(this.selectedSystem);
//   }

//   isAdmin(): boolean {
//     return !!this.getUserRoles().find(x => x === 'Administrator');
//   }

//   isBuyer(): boolean {
//     return !!this.getUserRoles().find(x => x === 'Member Buyer');
//   }

//   isTransactionRole(): boolean {
//     return !!this.getUserRoles().find(x => x === 'Transaction Management');
//   }

//   hasValidRole(): boolean {
//     return this.isAdmin() || this.isBuyer() || this.isTransactionRole();
//   }

//   hasToken(): boolean {
//     return !!this.getToken();
//   }

//   clearToken() {
//     localStorage.removeItem(this.tokenKey);
//   }

//   clearSystems() {
//     this.userSystems = null;
//     this.selectedSystem = null;
//   }

//   clearTamSideBar() {
//     this.isBucketSelected = null;
//     localStorage.removeItem('sideNavLinks');
//   }

//   private getData(): UserAccount {
//     if (this.hasToken()) {
//       try {
//         return this.jwtHelper.decodeToken(this.getToken());
//       } catch (e) {
//         return new UserAccount('', '', '', '', '', '', '', '', '');
//       }
//     }

//     return new UserAccount('', '', '', '', '', '', '', '', '');
//   }
// }
