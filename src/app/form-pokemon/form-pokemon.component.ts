import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave, faClose } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from '../models/pokemon';

@Component({
	selector: 'app-form-pokemon',
	templateUrl: './form-pokemon.component.html',
	styleUrls: ['./form-pokemon.component.scss']
})
export class FormPokemonComponent implements OnInit {

	public faSave = faSave;
	public faClose = faClose;
	public form!: FormGroup;
	public model: Pokemon = new Pokemon();
	@Output() closeEvent = new EventEmitter<Boolean>();

	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.model.attack = 0;
		this.model.defense = 0;
		this.form = this.formBuilder.group({
			name: [this.model.name, [Validators.required, Validators.minLength(4)]],
			image: [this.model.image, [Validators.required, Validators.minLength(4)]],
			attack: [this.model.attack, [Validators.required, Validators.min(0)]],
			defense: [this.model.defense, [Validators.required, Validators.min(0)]]
		});
	}

	save(){
		console.log(this.form.value)
	}

	sendClose() {
		this.closeEvent.emit(false);
	}
}
