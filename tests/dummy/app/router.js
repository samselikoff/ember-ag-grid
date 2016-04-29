import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('simple-example');
  this.route('complex-example');
  this.route('multipleheaders-examples');
  this.route('pagination-example');
});

export default Router;
  