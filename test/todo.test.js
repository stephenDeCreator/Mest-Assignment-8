const server = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

// styling
chai.should(
	// middleware
	chai.use(chaiHttp)
);

describe('Test Todo Controller', () => {
	describe('GET ALL Todos', () => {
		it('Should return all todos', (done) => {
			chai
				.request(server)
				.get('/todo')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});
		it('Should not return all todos', (done) => {
			chai
				.request(server)
				.get('/todos')
				.end((err, res) => {
					res.should.have.status(404);
					done();
				});
		});
	});
	describe('Get A Single Todo', () => {
		it('Should return a Single todo', (done) => {
			const todoId = '60741d9f9bafc00aecffff6f';
			chai
				.request(server)
				.get(`/todo/${todoId}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');
					done();
				});
		});

		it('Should not return a Single todo', (done) => {
			const todoId = '60741dc19bafc00aecffff74';

			chai
				.request(server)
				.get(`/todo/${todoId}`)
				.end((err, res) => {
					res.should.have.status(404);
					res.body.should.be.an('object');
					done();
				});
		});
	});
	describe('Create a Todo', () => {
		it('Should Create a Todo', (done) => {
			const todo = {
				text: 'Todo 1',
				completed: false
			};

			chai
				.request(server)
				.post('/todo')
				.send(todo)
				.end((err, res) => {
					res.should.have.status(201);
					res.body.should.be.an('object');

					done();
				});
		});
		it('Should not Create a Todo', (done) => {
			chai
				.request(server)
				.post('/todos')
				.end((err, res) => {
					res.should.have.status(404);

					done();
				});
		});
	});
	describe('Update a Todo', () => {
		it('Should update a Todo', (done) => {
			const todoId = '60741d939bafc00aecffff6e';
			chai
				.request(server)
				.patch(`/todo/${todoId}`)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.an('object');

					done();
				});
		});

		it('Should not Update a Todo', (done) => {
			const todoId = '60741d9f9bafc00aecffff6';
			const todo = {
				text: '',
				completed: false
			};
			chai
				.request(server)
				.patch(`/todo/${todoId}`)
				.send(todo)
				.end((err, res) => {
					res.should.have.status(400);

					done();
				});
		});
	});
	describe('Should Delete a Todo', () => {
		it('Should Delete a Todo', (done) => {
			const todoId = '6086917a685f55490079ab7d';

			chai
				.request(server)
				.delete(`/todo/${todoId}`)
				.end((err, res) => {
					res.should.have.status(200);

					done();
				});
		});

		it('Should not Delete a Todo', (done) => {
			const todoId = '60868d2f80398b5a046dedef';
			chai
				.request(server)
				.delete(`/todo/${todoId}`)
				.end((err, res) => {
					res.should.have.status(404);

					done();
				});
		});
	});
});
