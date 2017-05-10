import angular from 'angular'

import HomeCtrl from './controllers/HomeCtrl'
import TestCtrl from './controllers/TestCtrl'

const ControllerModule = 'ControllerModule'

angular.module(ControllerModule, [])
  .controller('HomeCtrl', HomeCtrl)
  .controller('TestCtrl', TestCtrl)

export default ControllerModule
