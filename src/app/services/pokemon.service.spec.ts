import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PokemonService } from './pokemon.service';

const dataresponse = [
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
		service.onSave(dataresponse[0]);
		httpClientSpy.delete.and.returnValue(of(dataresponse[0]));
		service.deleteData(dataresponse[0]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

	it('onSave service status E', (done: DoneFn) => {
		service.onSave(dataresponse[1]);
		httpClientSpy.delete.and.returnValue(of(dataresponse[0]));
		service.deleteData(dataresponse[1]).subscribe(resp =>{
			expect(resp).toEqual(dataresponse[0])
			done()
		})
	});

});
