"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const or_footer_1 = require("./or-footer");
exports.footerProps = {
    menuItems: [
        {
            label: 'Soporte al cliente',
            url: '/',
            items: [
                { label: 'Ayuda', url: '/help' },
                { label: 'Mis compras', url: '/shopping' },
                { label: 'Garantía Liverpool', url: '/guarantee' },
            ],
        },
    ],
    menuLink: [
        { url: '/termsAndConditions', label: 'Términos y condiciones' },
        { url: '/policy', label: 'Aviso de privacidad' },
        { url: '/siteMap', label: 'Mapa del sitio' },
    ],
    description: 'Foooter description',
};
(0, vitest_1.describe)('components/organisms/or-footer', () => {
    (0, vitest_1.afterEach)(() => {
        (0, react_1.cleanup)();
    });
    (0, vitest_1.it)('Renders default footer', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(or_footer_1.OrFooter, Object.assign({}, exports.footerProps)));
    });
    (0, vitest_1.it)('Renders a Contentinfo landmark', () => {
        const { getByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(or_footer_1.OrFooter, Object.assign({}, exports.footerProps)));
        getByRole('contentinfo');
    });
    (0, vitest_1.it)('Renders an accessible link to the invoicing page', () => {
        const { getAllByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(or_footer_1.OrFooter, Object.assign({}, exports.footerProps, { menuItems: [
                {
                    label: 'Invoicing',
                    url: '/',
                    items: [{ label: 'Facturación', url: '/invoicing' }],
                },
            ] })));
        const links = getAllByRole('link', { name: /Facturación/i });
        (0, vitest_1.expect)(links).toHaveLength(2);
        (0, vitest_1.expect)(links[0]).toHaveAttribute('href', '/invoicing');
    });
    (0, vitest_1.it)('Renders a Navigation landmark', () => {
        var _a;
        const { getByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(or_footer_1.OrFooter, Object.assign({}, exports.footerProps)));
        const footerNav = getByRole('navigation', { name: 'Footer Navigation' });
        const footerNavLinks = (0, react_1.within)(footerNav).getAllByRole('link');
        (0, vitest_1.expect)(footerNavLinks).toHaveLength(3);
        (_a = exports.footerProps.menuItems[0].items) === null || _a === void 0 ? void 0 : _a.forEach((linkItem) => {
            const link = (0, react_1.within)(footerNav).getByRole('link', { name: linkItem.label });
            (0, vitest_1.expect)(link).toHaveAttribute('href', linkItem.url);
        });
    });
});
