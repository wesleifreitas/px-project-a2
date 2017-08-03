import { MyApp } from './app.po';

describe('ng-demo App', () => {
	let page: MyApp;

	beforeEach(() => {
		page = new MyApp();
	});

	it('should display message saying app works', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toContain('conduit');
	});
});
