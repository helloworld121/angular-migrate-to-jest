// Snapshot-Testing
// to compare the HTML

import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  test('should keep its HTML', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // this is marked as red, because we have jasmine, jest and karma, but this method exists
    expect(fixture).toMatchSnapshot();
  });

});
