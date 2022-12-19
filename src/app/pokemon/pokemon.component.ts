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
			search: ['', [Validators.required, Validators.minLength(3)]]
		});
		this.listData();
		this.formSearch.get('search')?.valueChanges.subscribe((resp) => {
			if (resp.length >= 3) {
				let rowsFilter = this.rows.map((ele: any) => {
					if (ele.name.includes(resp)) {
						return ele
					} else {
						return ''
					}
				});
				if(rowsFilter.filter(fil => fil.name).length > 0){
					this.rows = rowsFilter.filter(fil => fil.name)
				}else{
					this.listData();
				}				
			} else {
				this.listData();
			}
		});
	}

	listData() {
		this.service.getData().subscribe((resp: Array<Pokemon>) => {
			this.rows = resp;
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
		if (this.activeForm) {
			this.activeForm = false;
			setTimeout(() => {
				this.rowSelected = row;
				this.rowSelected.status = 'E';
				this.activeForm = true;
			}, 1);
		} else {
			this.rowSelected = row;
			this.rowSelected.status = 'E';
			this.activeForm = true;
		}
	}

	receiveData(row: Pokemon) {
		this.activeForm = false;
		this.service.onSave(row).subscribe(() => {
			this.listData();
		})
	}

	deleteRow(row: Pokemon) {
		this.service.deleteData(row).subscribe((resp: any) => {
			this.listData();
		})
	}
}
