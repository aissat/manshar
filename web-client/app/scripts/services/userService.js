'use strict';

angular.module('webClientApp')

  /**
   * A service to retrieve current user drafts.
   * @param  {!angular.$resource} $resource
   * @param  {string} API_HOST Manshar API host.
   * @return {!angular.Service} Angualr service definition.
   */
  .service('UserDraft', ['$resource', 'API_HOST',
      function ($resource, API_HOST) {

      var baseUrl = '//' + API_HOST + '/api/v1/';
      var UserDraftResource = $resource(baseUrl + 'me/drafts');

      return {
        query: UserDraftResource.query
      };
    }]);

