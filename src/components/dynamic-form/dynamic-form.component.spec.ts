import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

describe('Component: DynamicFormComponent', () => {
    let componentFixture: ComponentFixture<DynamicFormComponent>;
    let component: DynamicFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent],
            imports: [ReactiveFormsModule]
        });

        componentFixture = TestBed.createComponent(DynamicFormComponent);
        component = componentFixture.debugElement.componentInstance;
    });

    it('should have defined a component instance', () => {
        expect(component).toBeDefined()
    });    

    it('should create a FormGroup comprised of FormControls', () => {
        component.ngOnInit();
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });

    it('should create a FormControl for each question', () => {
        component.questions = [
            {
                controlType: 'text',
                id: 'first',
                label: 'My First',
                required: false
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true
            }
        ];
        component.ngOnInit();
        expect(Object.keys(component.formGroup.controls)).toEqual([
            'first', 'second'
        ])
    });
});