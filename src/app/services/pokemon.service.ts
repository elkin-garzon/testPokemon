import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	public url = '';

	constructor(
		private HttpClient: HttpClient
	) {
		this.url = `${environment.urlPokemon}`;
	}

	getData() {
		let params = new HttpParams();
		params = params.append('idAuthor', 1);
		return this.HttpClient.get<any>(`${this.url}`, { params });
	}

	postData(row: Pokemon) {
		let params = new HttpParams();
		params = params.append('idAuthor', 1);
		return this.HttpClient.post<any>(`${this.url}`, Pokemon.clone(row), { params });
	}

	onSave(row: Pokemon) {
		if (row.status === 'N') {
			return this.postData(row);
		} else {
			return this.putData(row);
		}
	}

	getDetail(row: Pokemon) {
		return this.HttpClient.get<any>(`${this.url}/${row.id}`);
	}

	putData(row: Pokemon) {
		return this.HttpClient.put<any>(`${this.url}/${row.id}`, Pokemon.clone(row));
	}

	deleteData(row: Pokemon) {
		return this.HttpClient.delete<any>(`${this.url}/${row.id}`);
	}
}
