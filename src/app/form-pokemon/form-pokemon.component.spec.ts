import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormPokemonComponent } from './form-pokemon.component';
import { By } from '@angular/platform-browser';

describe('FormPokemonComponent', () => {
	let component: FormPokemonComponent;
	let fixture: ComponentFixture<FormPokemonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FormsModule
			],
			declarations: [FormPokemonComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();

		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('save button form valid', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		let name = component.form.controls['name'];
		let image = component.form.controls['image'];
		let attack = component.form.controls['attack'];
		let defense = component.form.controls['defense'];

		name.setValue('pikachu');
		image.setValue('pikachu');
		attack.setValue(70);
		defense.setValue(50);

		component.save();
		expect(component.form.valid).toEqual(true);
	});

	it('save button form invalid', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		let name = component.form.controls['name'];

		name.setValue('pikachu');
		component.save();
		expect(component.form.valid).toEqual(false);
	});

	it('save button sendClose', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.sendClose();
		expect(component).toBeTruthy();
	});
});
