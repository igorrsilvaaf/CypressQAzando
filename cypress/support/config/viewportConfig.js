export const setViewport = (device) => {
    switch (device) {
        case 'desktop':
            cy.viewport(1920, 1080);
            break;
        case 'mobile':
            cy.viewport('iphone-xr');
            break;
        case 'macbook-13':
            cy.viewport('macbook-13');
            break;
        case 'macbook-11':
            cy.viewport('macbook-11');
            break;
        default:
            cy.viewport(1280, 720);
            break;
    }
};