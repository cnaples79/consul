/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

/* eslint-disable no-undef */
self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: 'silence', matchId: 'ember-cli-page-object.string-properties-on-definition' },
    { handler: 'silence', matchId: 'ember-sinon-qunit.test' },
    { handler: 'silence', matchId: 'ember-qunit.deprecate-legacy-apis' },
    { handler: 'silence', matchId: 'ember-can.can-service' },
    { handler: 'silence', matchId: 'ember-data:model.toJSON' },
    { handler: 'silence', matchId: 'ember-cli-page-object.is-property' },
    { handler: 'silence', matchId: 'ember-views.partial' },
    { handler: 'silence', matchId: 'ember-component.send-action' },
    { handler: 'silence', matchId: 'ember-cli-page-object.multiple' },
    { handler: 'silence', matchId: 'computed-property.override' },
    { handler: 'silence', matchId: 'autotracking.mutation-after-consumption' },
    { handler: 'silence', matchId: 'ember-data:legacy-test-helper-support' },
    { handler: 'silence', matchId: 'ember-data:Model.data' },
    { handler: 'silence', matchId: 'this-property-fallback' },
    { handler: 'silence', matchId: 'hds.components.sidenav' },
    { handler: 'silence', matchId: 'setting-on-hash' },
    { handler: 'silence', matchId: 'array-observers' },
    { handler: 'silence', matchId: 'routing.transition-methods' },
    { handler: 'silence', matchId: 'route-render-template' },
    { handler: 'silence', matchId: 'deprecated-run-loop-and-computed-dot-access' },
    { handler: 'silence', matchId: 'ember.component.reopen' },
    { handler: 'silence', matchId: 'ember.built-in-components.import' },
  ],
};
