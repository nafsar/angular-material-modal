import { TestBed, async } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
describe('ModalComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalComponent
      ],
    }).compileComponents();
  }));
  it('should create the modal', async(() => {
    const fixture = TestBed.createComponent(ModalComponent);
    const modal = fixture.debugElement.componentInstance;
    expect(modal).toBeTruthy();
  }));

});
