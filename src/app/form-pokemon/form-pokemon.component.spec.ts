import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormPokemonComponent } from './form-pokemon.component';

const row = {
	id: 1,
	name: 'pikachu',
	image: 'pikachu',
	attack: 70,
	defense: 50,
	status: 'N',
}

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

	/*it('set data @input', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		component.row = row;
		fixture.detectChanges();

		
	});*/


	it('save button form valid', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		let id = component.form.controls['id'];
		let name = component.form.controls['name'];
		let image = component.form.controls['image'];
		let attack = component.form.controls['attack'];
		let defense = component.form.controls['defense'];
		let status = component.form.controls['status'];

		id.setValue(0);
		name.setValue('pikachu');
		image.setValue('pikachu');
		attack.setValue(70);
		defense.setValue(90);
		status.setValue('N');

		component.save();
		expect(component.form.valid).toEqual(true);
	});



	it('save button sendClose', () => {
		fixture = TestBed.createComponent(FormPokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.sendClose();
	});
});
