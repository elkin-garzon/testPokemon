import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	public formSearch!: FormGroup;
	public activeForm:Boolean = true;
	public faPlus = faPlus;
	public faMagnifyingGlass = faMagnifyingGlass;

	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.formSearch = this.formBuilder.group({
			search: ['', [Validators.required, Validators.minLength(4)]]
		});

		this.formSearch.valueChanges.subscribe(() => {
			console.log('--->', this.formSearch.valid)
		})
	}

	receiveClose(close:Boolean){
		this.activeForm = close;
	}
}
