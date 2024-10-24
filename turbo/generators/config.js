"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation
function toKebabCase(str) {
    return str
        .normalize('NFD') // Normalize Unicode characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-z0-9-]/gi, '')
        .toLowerCase();
}
const getComponentCreationActions = (path) => {
    console.log('ath', path);
    return [
        {
            type: 'add',
            path: `${path}/{{kebabCase name}}/index.ts`,
            templateFile: 'templates/component-index.ts.hbs',
        },
        {
            type: 'add',
            path: `${path}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
            templateFile: 'templates/component.tsx.hbs',
        },
        {
            type: 'add',
            path: `../../../apps/storybook/src/stories/{{atomic}}/{{kebabCase name}}.stories.tsx`,
            templateFile: 'templates/component.stories.tsx.hbs',
        },
        {
            type: 'add',
            path: `${path}/{{kebabCase name}}/{{kebabCase name}}.mock.ts`,
            templateFile: 'templates/component.mock.ts.hbs',
        },
        {
            type: 'add',
            path: `${path}/{{kebabCase name}}/{{kebabCase name}}.test.tsx`,
            templateFile: 'templates/component.test.tsx.hbs',
        },
        // Append new component to core index.ts (packages/components/core/src/index.ts)
        {
            type: 'append',
            path: '../core/src/index.ts',
            template: `\nexport { {{pascalCase name}}, type {{pascalCase name}}Props } from './components/{{atomic}}';`,
        },
    ];
};
const ATOMIC_CATEGORIES = {
    atoms: 'atoms',
    molecules: 'molecules',
    organisms: 'organisms',
    templates: 'templates',
};
const CATEGORY_PREFIXES = {
    atoms: 'at-',
    molecules: 'ml-',
    organisms: 'or-',
    templates: 'tm-',
};
function generator(plop) {
    plop.setHelper('kebabCase', (text) => toKebabCase(text));
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
            {
                type: 'list',
                name: 'atomic',
                message: "Select your component's category",
                choices: [
                    ATOMIC_CATEGORIES.atoms,
                    ATOMIC_CATEGORIES.molecules,
                    ATOMIC_CATEGORIES.organisms,
                    ATOMIC_CATEGORIES.templates,
                ],
            },
        ],
        actions: (data) => {
            if (!data) {
                throw Error('Invalid answers');
            }
            const name = data.name;
            const atomic = data.atomic;
            const atomicPrefix = CATEGORY_PREFIXES[atomic];
            data.name = `${atomicPrefix}${name}`;
            const path = '../core/src/components/{{atomic}}';
            return [
                ...getComponentCreationActions(path),
                {
                    type: 'append',
                    path: `${path}/index.ts`,
                    separator: '',
                    template: `\nexport * from './{{kebabCase name}}';\n`,
                },
            ];
        },
    });
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator('react-component', {
        description: 'Adds a new react component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{pascalCase name}}.tsx',
                templateFile: 'templates/component.hbs',
            },
            {
                type: 'append',
                path: 'index.tsx',
                pattern: /(\/\/ component exports)/g,
                template: 'export * from "./{{pascalCase name}}";',
            },
        ],
    });
}
exports.default = generator;
