import './../css/style.scss'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import router from './app.router'

import ControllerModule from './controller'
import ComponentModule from './component'

angular.module('AnRoll', [ uiRouter, router, ControllerModule, ComponentModule ])
