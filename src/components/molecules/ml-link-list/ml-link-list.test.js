"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const ml_link_list_1 = require("./ml-link-list");
(0, vitest_1.describe)('MlLinkList Component', () => {
    const mockLinks = [
        { href: '/link1', label: 'Link 1' },
        { href: '/link2', label: 'Link 2' },
        { href: '/link3', label: 'Link 3' },
    ];
    const defaultProps = {
        title: 'Test Title',
        links: mockLinks,
    };
    (0, vitest_1.it)('renders without crashing', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps)));
        (0, vitest_1.expect)(getByTestId('ml-link-list')).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders the title with default level h2', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps)));
        const titleElement = container.querySelector('h2');
        (0, vitest_1.expect)(titleElement).toBeInTheDocument();
        (0, vitest_1.expect)(titleElement).toHaveTextContent('Test Title');
    });
    (0, vitest_1.it)('renders the title with specified title level', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps, { titleLevel: "h4" })));
        const titleElement = container.querySelector('h4');
        (0, vitest_1.expect)(titleElement).toBeInTheDocument();
        (0, vitest_1.expect)(titleElement).toHaveTextContent('Test Title');
    });
    (0, vitest_1.it)('renders the correct number of links', () => {
        const { getAllByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps)));
        const linkElements = getAllByTestId('at-link');
        (0, vitest_1.expect)(linkElements.length).toBe(3);
    });
    (0, vitest_1.it)('passes the correct props to AtLink', () => {
        const { getAllByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps)));
        const linkElements = getAllByTestId('at-link');
        linkElements.forEach((linkElement, index) => {
            (0, vitest_1.expect)(linkElement).toHaveAttribute('href', mockLinks[index].href);
            (0, vitest_1.expect)(linkElement).toHaveTextContent(mockLinks[index].label);
        });
    });
    (0, vitest_1.it)('sets data-testid correctly', () => {
        const customTestId = 'custom-test-id';
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps, { "data-testid": customTestId })));
        (0, vitest_1.expect)(getByTestId(customTestId)).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders list items with correct spacing except for the last item', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps)));
        const listItems = container.querySelectorAll('li');
        listItems.forEach((item, index) => {
            if (index < listItems.length - 1) {
                (0, vitest_1.expect)(item).toHaveClass('mb-2');
            }
            else {
                (0, vitest_1.expect)(item).not.toHaveClass('mb-2');
            }
        });
    });
    (0, vitest_1.it)('does not render links when links array is empty', () => {
        const { queryAllByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps, { links: [] })));
        const linkElements = queryAllByTestId('at-link');
        (0, vitest_1.expect)(linkElements.length).toBe(0);
    });
    (0, vitest_1.it)('handles missing optional props gracefully', () => {
        const minimalProps = {
            title: 'Minimal Title',
            links: [],
        };
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, minimalProps)));
        (0, vitest_1.expect)(getByText('Minimal Title')).toBeInTheDocument();
    });
    (0, vitest_1.it)('calls AtLink onClick handler when link is clicked', () => {
        const handleClick = vitest_1.vi.fn();
        const linksWithOnClick = [{ href: '/link1', label: 'Link 1', onClick: handleClick }];
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps, { links: linksWithOnClick })));
        const linkElement = getByText('Link 1');
        react_1.fireEvent.click(linkElement);
        (0, vitest_1.expect)(handleClick).toHaveBeenCalled();
    });
    (0, vitest_1.it)('renders AtLink with correct variant and other props', () => {
        const customLinks = [
            {
                href: '/custom-link',
                label: 'Custom Link',
                variant: 'hover',
                target: '_blank',
                dataTestId: 'custom-at-link',
            },
        ];
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_link_list_1.MlLinkList, Object.assign({}, defaultProps, { links: customLinks })));
        const linkElement = getByTestId('custom-at-link');
        (0, vitest_1.expect)(linkElement).toHaveAttribute('href', '/custom-link');
        (0, vitest_1.expect)(linkElement).toHaveAttribute('target', '_blank');
        (0, vitest_1.expect)(linkElement).toHaveTextContent('Custom Link');
    });
});
