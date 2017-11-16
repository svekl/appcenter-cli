/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the HockeyAppCrashForwardingInfo class.
 * @constructor
 * @member {boolean} forwardingEnabled
 * 
 */
function HockeyAppCrashForwardingInfo() {
}

/**
 * Defines the metadata of HockeyAppCrashForwardingInfo
 *
 * @returns {object} metadata of HockeyAppCrashForwardingInfo
 *
 */
HockeyAppCrashForwardingInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'HockeyAppCrashForwardingInfo',
    type: {
      name: 'Composite',
      className: 'HockeyAppCrashForwardingInfo',
      modelProperties: {
        forwardingEnabled: {
          required: true,
          serializedName: 'forwarding_enabled',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = HockeyAppCrashForwardingInfo;