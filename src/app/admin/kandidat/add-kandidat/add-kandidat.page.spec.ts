import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddKandidatPage } from './add-kandidat.page';

describe('AddKandidatPage', () => {
  let component: AddKandidatPage;
  let fixture: ComponentFixture<AddKandidatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKandidatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
