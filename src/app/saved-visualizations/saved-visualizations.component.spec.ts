import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedVisualizationsComponent } from './saved-visualizations.component';

describe('SavedVisualizationsComponent', () => {
  let component: SavedVisualizationsComponent;
  let fixture: ComponentFixture<SavedVisualizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedVisualizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedVisualizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
