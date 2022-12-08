import { Pokemon } from './pokemon';

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


describe('Pokemon', () => {
	it('should create an instance', () => {
		expect(new Pokemon()).toBeTruthy();
	});
});
