import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faMagnifyingGlass, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
	public faPlus = faPlus;
	public faMagnifyingGlass = faMagnifyingGlass;
	public faPen = faPen;
	public faTrashCan = faTrashCan;

	public formSearch!: FormGroup;
	public activeForm: Boolean = false;
	public rows: Array<Pokemon> = [];
	public rowSelected: Pokemon = new Pokemon();


	constructor(
		public formBuilder: FormBuilder,
		public service: PokemonService
	) { }

	ngOnInit(): void {
		this.formSearch = this.formBuilder.group({
			search: ['', [Validators.required, Validators.minLength(4)]]
		});

		this.formSearch.valueChanges.subscribe(() => {

		});

		this.rows.push({
			id: 1,
			name: 'pikachu',
			image: 'https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg',
			attack: 50,
			defense: 50
		});
		this.listData();
	}

	listData() {
		this.service.getData().subscribe((resp: Array<any>) => {
			
		})
	}

	newPokemon() {
		this.rowSelected = new Pokemon();
		this.rowSelected.status = 'N';
		this.activeForm = true;
	}

	receiveClose(close: Boolean) {
		this.rowSelected = new Pokemon();
		this.rowSelected.status = 'N';
		this.activeForm = close;
	}

	edithRow(row: Pokemon) {
		this.rowSelected = row;
		this.rowSelected.status = 'E';
		this.activeForm = true;
	}

	receiveData(row: Pokemon) {
		this.activeForm = false;
		this.service.onSave(row).subscribe((resp: any) => {
			
		})
	}

	deleteRow(row: Pokemon) {
		this.service.deleteData(row).subscribe((resp: any) => {
			
		})
	}
}
