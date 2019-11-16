const request = require('supertest')
const app = require('../app')

let INITIAL_PERSONS = [
  {
    id: 1,
    name: 'Yayu',
    age: 20
  },
  {
    id: 2,
    name: 'Guyu',
    age: 19
  }
]

describe('API: Users', () => {
  it('GET: should return all users', async () => {
    const response = await request(app)
      .get('/api/users')

    expect(response.ok).toBeTruthy()
    expect(response.body).toEqual(INITIAL_PERSONS)
  })

  it('GET: should get user with id 1', async () => {
    const response = await request(app)
      .get('/api/users/1')

    expect(response.ok).toBeTruthy()
    expect(response.body).toEqual(INITIAL_PERSONS[0])
  })

  it('POST: should add new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'from test',
        age: 12
      })

    expect(response.body.data).toEqual({ age: 12, id: 3, name: 'from test' })
    expect(response.body.message).toEqual('Success add from test to storage')

    const newResponse = await request(app).get('/api/users')
    expect(newResponse.body.length).toBe(3)
  })

  it('DELETE: should delete user with id 1', async () => {
    const response = await request(app)
      .delete('/api/users/1')
    expect(response.body.message).toEqual('successful delete person with id 1')

    const newResponse = await request(app)
      .get('/api/users')

    expect(newResponse.body).toEqual([
      { age: 19, id: 2, name: 'Guyu' },
      { age: 12, id: 3, name: 'from test' }
    ])
    expect(newResponse.body.length).toBe(2)

    const anotherResponse = await request(app)
      .get('/api/users/1')
    expect(anotherResponse.notFound).toBeTruthy()
    expect(anotherResponse.body).toEqual({ message: 'user with id 1 not found' })
  })

  it('PUT: should update user with id 3', async () => {
    const response = await request(app)
      .put('/api/users/3')
      .send({
        name: 'new name from test'
      })
    
    expect(response.body).toEqual({ age: 12, name: 'new name from test' })
  })
})
