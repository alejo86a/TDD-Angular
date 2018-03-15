import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateComponent } from './candidate.component';
import { VotesComponent } from '../votes/votes.component';

describe('CandidateComponent', () => {
  let component: CandidateComponent;
  let fixture: ComponentFixture<CandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateComponent, VotesComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {});
  beforeAll(() => {});
  afterAll(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
