/**
 * Enhances a rule by wrapping its update method to notify TinyMCE of changes
 * @param {Object} rule - The rule to enhance
 * @param {Function} [enhanceMethod] - Optional custom method to notify TinyMCE
 * @returns {Object} - The enhanced rule
 */
export function enhanceRule(rule: Object, enhanceMethod?: Function): Object;
/**
 * Enhances an array of rules by wrapping their update methods to notify TinyMCE of changes
 * @param {Array} rules - The array of rules to enhance
 * @param {Function} [enhanceMethod] - Optional custom method to notify TinyMCE
 * @returns {Array} - The array of enhanced rules
 */
export function enhanceRules(rules: any[], enhanceMethod?: Function): any[];
