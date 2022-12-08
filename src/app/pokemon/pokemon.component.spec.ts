import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../services/pokemon.service';
const dataResponse = [
	{
		id: 1,
		name: 'pikachu',
		image: 'pikachu',
		attack: 70,
		defense: 50,
		status: 'N',
	},
	{
		id: 1,
		name: 'pikachu',
		image: 'pikachu',
		attack: 70,
		defense: 50,
		status: 'E',
	}
]
describe('PokemonComponent', () => {
	let component: PokemonComponent;
	let fixture: ComponentFixture<PokemonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FormsModule,
				HttpClientTestingModule
			],
			declarations: [PokemonComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();

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

	it('newPokemon', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.newPokemon();
		expect(component).toBeTruthy();
	});	

	it('edithRow', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.edithRow(dataResponse[0]);
		expect(component).toBeTruthy();
	});	

	it('receiveData', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.receiveData(dataResponse[0]);
		expect(component).toBeTruthy();
	});	

	it('deleteRow', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.deleteRow(dataResponse[0]);
		expect(component).toBeTruthy();
	});	
});
