import _ from 'lodash';

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Hello Landing Page :)';
  }
}
export {HomeController};
