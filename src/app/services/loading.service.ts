import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  // Keeping track of a load count protects against nested/concurrent loads,
  // so `isLoading` returns true while there is at least one process loading
  private loadCount = 0;

  isLoading(): boolean {
    return this.loadCount > 0;
  }

  /**
   * Adds a load count to this service. To avoid a hanging loading panel, make
   * sure to eventually call `removeLoad()` for every call to this method.
   */
  addLoad() {
    this.loadCount++;
  }

  /**
   * Removes a load count from this service. To avoid a hanging loading panel, make
   * sure to eventually call this method for every call to `addLoad()`. Calling this
   * method while `isLoading` is false has no effect.
   */
  removeLoad() {
    if (this.isLoading()) {
      this.loadCount--;
    }
  }
}
