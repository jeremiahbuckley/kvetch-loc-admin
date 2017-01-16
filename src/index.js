import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';

import coreShared from './app/core.shared.module.js';
import shell from './app/components/shell.module.js';
import suggestions from './app/components/suggestions.module.js';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.scss';

angular
  .module('app', ['ui.router', shell, suggestions, coreShared])
  .config(routesConfig)
  .component('app', main);
