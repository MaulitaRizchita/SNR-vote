import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisAkunPage } from './regis-akun.page';

describe('RegisAkunPage', () => {
  let component: RegisAkunPage;
  let fixture: ComponentFixture<RegisAkunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisAkunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
