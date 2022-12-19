import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PokemonService } from './pokemon.service';

const dataresponse = [
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
		status: 'E',
	}
]

describe('PokemonService', () => {
	let service: PokemonService;
	let httpClientSpy: jasmine.SpyObj<HttpClient>;

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'put', 'delete']);
		service = new PokemonService(httpClientSpy);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('getData service', (done: DoneFn) => {
		httpClientSpy.get.and.returnValue(of(dataresponse));
		service.getData().subscribe(resp =>{
			expect(resp).toEqual(dataresponse)
			done()
		})
	});

	it('postData service', (done: DoneFn) => {
		httpClientSpy.post.and.returnValue(of(dataresponse[0]));
		service.postData(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('getDetail service', (done: DoneFn) => {
		httpClientSpy.get.and.returnValue(of(dataresponse[0]));
		service.getDetail(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('putData service', (done: DoneFn) => {
		httpClientSpy.put.and.returnValue(of(dataresponse[0]));
		service.putData(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('deleteData service', (done: DoneFn) => {
		httpClientSpy.delete.and.returnValue(of(dataresponse[0]));
		service.deleteData(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('onSave service status N', (done: DoneFn) => {
		service.onSave({
			id: 2,
			name: "pikachu",
			image: "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg",
			attack: 64,
			defense: 77,
			hp: 0,
			type: "",
			idAuthor: 1,
			status: 'N',
		});
		httpClientSpy.post.and.returnValue(of(dataresponse[0]));
		service.postData(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('onSave service status E', (done: DoneFn) => {
		service.onSave({
			id: 2,
			name: "pikachu",
			image: "https://www.primecomics.com.co/images/feature_variant/3/pikachu.jpg",
			attack: 64,
			defense: 77,
			hp: 0,
			type: "",
			idAuthor: 1,
			status: 'E',
		});
		httpClientSpy.put.and.returnValue(of(dataresponse[1]));
		service.putData(dataresponse[1]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[1])
			done()
		})
	});

});
