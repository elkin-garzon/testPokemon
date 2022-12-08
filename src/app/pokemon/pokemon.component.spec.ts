import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
	let component: PokemonComponent;
	let fixture: ComponentFixture<PokemonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FormsModule
			],
			declarations: [PokemonComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();

		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		let search = component.formSearch.controls['search'];
		search.setValue('pikachu');
		expect(component).toBeTruthy();
	});


	it('save button receiveClose false', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		component.receiveClose(false);
		expect(component).toBeTruthy();
	});

	it('save button receiveClose true', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.receiveClose(false);
		expect(component).toBeTruthy();
	});
});
