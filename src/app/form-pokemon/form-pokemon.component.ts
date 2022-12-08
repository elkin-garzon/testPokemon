import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
	@Input() row: Pokemon = new Pokemon;
	@Output() closeEvent = new EventEmitter<Boolean>();
	@Output() sendEvent = new EventEmitter<Pokemon>();

	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		console.log(11111)
		this.form = this.formBuilder.group({
			id: [this.row.id],
			name: [this.row.name, [Validators.required, Validators.minLength(4)]],
			image: [this.row.image, [Validators.required, Validators.minLength(4)]],
			attack: [this.row.attack, [Validators.required, Validators.min(0)]],
			defense: [this.row.defense, [Validators.required, Validators.min(0)]],
			status: [this.row.status, [Validators.required, Validators.minLength(1)]]
		});
	}

	save() {
		if (this.form.valid) {
			this.sendEvent.emit(this.form.value);
		}
	}

	sendClose() {
		this.closeEvent.emit(false);
	}
}
