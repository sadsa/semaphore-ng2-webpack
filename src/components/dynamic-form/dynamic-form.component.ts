import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../../models/index';

@Component({
    selector: 'dynamic-form',
    template: ''
})
export class DynamicFormComponent implements OnInit {
    formGroup: FormGroup;
    @Input() questions: Array<Question>;

    ngOnInit() {
        this.formGroup = this.generateForm(this.questions || []);
    }

    generateForm(questions: Array<Question>): FormGroup {
        const formControls = questions.reduce(this.generateControls, {});

        return new FormGroup(formControls);
    }

    generateControls(controls: any, question: Question) {
        if(question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;
    }

}