import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

	public formSearch!: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
	) {}

	ngOnInit(): void {
		this.formSearch = this.formBuilder.group({
			seach:['', [Validators.required, Validators.minLength(4)]]
		});

		this.formSearch.valueChanges.subscribe(()=>{
			console.log(this.formSearch.valid)
		})
	}
}
