import fs from 'fs';
import { join } from 'path';
const core = require('@actions/core');

/**
 * Read package.json file
 * @param {string} path
 * @returns {object}
 */
const readPackageJson = function (path) {
    const packageJson = fs.readFileSync(join(path, 'package.json')).toString();

    return JSON.parse(packageJson);
};

try {
    /**
     * Path to directory with package.json file
     * @type {string}
     */
    const path = core.getInput('path');

    /**
     * Get data from package.json file
     * @type {object}
     */
    const packageInfo = readPackageJson(path);

    /**
     * Detect if version is a release candidate 
     * @type {string}
     */
    const isReleaseCandidate = packageInfo.version.includes('rc');

    core.setOutput("name", packageInfo.name);
    core.setOutput("version", packageInfo.version);
    core.setOutput("npmjs-link", `https://www.npmjs.com/package/${packageInfo.name}`);
    core.setOutput("is-release-candidate", isReleaseCandidate);
} catch (error) {
    core.setFailed(error.message);
}