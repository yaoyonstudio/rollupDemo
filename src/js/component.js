import angular from 'angular'
import TestCom from './components/TestCom'

const ComponentModule = 'ComponentModule'

angular.module(ComponentModule, [])
  .component('testCom', TestCom)

export default ComponentModule
