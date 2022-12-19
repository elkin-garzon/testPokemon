import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PokemonComponent } from './pokemon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../services/pokemon.service';
import { of } from 'rxjs/internal/observable/of';
const dataResponse = [
	{
		id: 2,
		name: "pikachu",
		image: "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg",
		attack: 64,
		defense: 77,
		hp: 0,
		type: "",
		idAuthor: 1,
		status: 'E',
	},
	{
		id: 2,
		name: "pikachu",
		image: "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg",
		attack: 64,
		defense: 77,
		hp: 0,
		type: "",
		idAuthor: 1,
		status: 'N',
	}
]
const fakePokemonService = jasmine.createSpyObj<PokemonService>(
	'PokemonService',
	{
		getData: of(dataResponse)
	}
);

describe('PokemonComponent', () => {
	let component: PokemonComponent;
	let fixture: ComponentFixture<PokemonComponent>;
	let fakeService: PokemonService;

	beforeEach(async () => {

		fakeService = jasmine.createSpyObj<PokemonService>(
			'CounterService',
			{
				getData: of(dataResponse),
				onSave: of(dataResponse[0]),
				deleteData: of(dataResponse[0]),
			}
		);

		await TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				FormsModule,
				HttpClientTestingModule
			],
			providers: [
				{ provide: PokemonService, useValue: fakeService }	
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

	it('edithRow rith activeForm in true', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.activeForm = true;
		component.edithRow(dataResponse[0]);
		expect(component).toBeTruthy();
	});

	it('edithRow rith activeForm in false', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.activeForm = false;
		component.edithRow(dataResponse[0]);
		expect(component).toBeTruthy();
	});

	it('receiveData', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.receiveData(dataResponse[0])
		expect(component).toBeTruthy();
	});

	it('listData', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		expect(fakeService.getData).toHaveBeenCalled();
	});

	it('deleteRow', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.deleteRow(dataResponse[0]);
		expect(component).toBeTruthy();
	});


	it('serach form valid', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.rows = dataResponse;
		let search = component.formSearch.controls['search'];
		search.setValue('pika');
		expect(component.formSearch.valid).toEqual(true);
	});

	it('serach form invalid', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.rows = dataResponse;
		let search = component.formSearch.controls['search'];
		search.setValue('pi');
		expect(component.formSearch.valid).toEqual(false);
	});

	it('serach form valid with not include', () => {
		fixture = TestBed.createComponent(PokemonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.rows = dataResponse;
		let search = component.formSearch.controls['search'];
		search.setValue('char');
		expect(component.formSearch.valid).toEqual(true);
	});
});
