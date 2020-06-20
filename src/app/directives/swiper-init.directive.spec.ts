import { SwiperInitDirective } from './swiper-init.directive';
let elRefMock = {
	nativeElement: document.createElement('div'),
};

describe('SwiperInitDirective', () => {
	it('should create an instance', () => {
		const directive = new SwiperInitDirective();
		expect(directive).toBeTruthy();
	});
});
