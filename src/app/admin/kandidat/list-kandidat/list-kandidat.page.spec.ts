import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListKandidatPage } from './list-kandidat.page';

describe('ListKandidatPage', () => {
  let component: ListKandidatPage;
  let fixture: ComponentFixture<ListKandidatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKandidatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
