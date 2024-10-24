"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateText = void 0;
/**
 * Truncate a string to a specified length and add ellipsis (...) if necessary.
 *
 * @param {string} text - The string to be truncated.
 * @param {number} maxLength - The maximum length of the truncated string including the ellipsis.
 * @returns {string} The truncated string with ellipsis if it exceeds the maximum length.
 */
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + '...';
    }
    return text;
}
exports.truncateText = truncateText;
