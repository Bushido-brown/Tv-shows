import fetchMock from 'jest-fetch-mock';
import { getTotalComments } from '../modules/likeFunctionality';

fetchMock.enableMocks();

beforeEach(() => {
    fetch.resetMocks()
})
describe('Get  totaal comment count ', () => {
    test('Return true if id is a number', () => {
        const id = 378
        expect(getTotalComments()).toBeDefined()

        test('Return 0 if data is empty', async () => {

            const id = 'hello_world_id';
            const data = await getTotalComments(id)

            expect(data).toBe(0)
        })
    })
    test('Return true if id is a string', async () => {
        const id = "378"
        expect(getTotalComments()).toBeDefined()
    })




})