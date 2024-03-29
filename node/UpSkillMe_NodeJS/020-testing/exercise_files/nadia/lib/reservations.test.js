// const Reservations = require('./reservations');
const Reservation = require('./schema/reservation');

describe('fetch', () => {
  let Reservations;

  beforeAll(() => {
    jest.mock('./reservations.js');
    Reservations = require('./reservations');
  });

  afterAll(() => {
    jest.unmock('./reservations.js');
  });

  it('should be mocked and not create a Db record', () => {
    expect(Reservations.fetch()).toBeUndefined();
  });
});

describe('save', () => {
  let Reservations;
  const mockDebug = jest.fn(); // don't forget to add 'mock' or reference error
  const mockInsert = jest.fn().mockResolvedValue([1]);
  // the function is returning a Promise which resolve with [1]

  beforeAll(() => {
    jest.mock('debug', () => () => mockDebug); // first ()-> factory, second -> initialization function
    jest.mock('./knex.js', () => () => ({
      insert: mockInsert,
    }));

    Reservations = require('./reservations');
  });

  afterAll(() => {
    jest.unmock('debug');
    jest.unmock('./knex');
  });

  it('should resolve with the id upon success', async () => {
    const value = { foo: 'bar' };
    const expected = [1];

    const actual = await Reservations.save(value);

    expect(actual).toStrictEqual(expected);
    expect(mockDebug).toBeCalledTimes(1);
    expect(mockInsert).toBeCalledWith(value);
  })
});

describe('validate', () => {
  let Reservations;

  beforeAll(() => {
    Reservations = require('./reservations');
  });

  it('should resolve with no optional fields', () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username@example.com',
    });

    return Reservations.validate(reservation)
      .then(value => expect(value).toEqual(reservation));
  });

  it('should reject with invalid email', () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });

    expect.assertions(1);
    // here we specify how many assertions would be used with reject

    return Reservations.validate(reservation)
      .catch(error => expect(error).toBeInstanceOf(Error));
  });

  it('should be called and reject empty input', async () => {
    const mock = jest.spyOn(Reservations, 'validate');
    const value = undefined;

    await expect(Reservations.validate(value))
      .rejects.toThrow("Cannot read properties of undefined (reading 'validate')");

    expect(mock).toBeCalledWith(value);
    mock.mockRestore();
  });
});

describe('validate async/await', () => {
  let Reservations;

  beforeAll(() => {
    Reservations = require('./reservations');
  });

  it('should resolve with no optional fields', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username@example.com',
    });

    await expect(Reservations.validate(reservation))
      .resolves.toEqual(reservation); // we here use resolves
  });

  it('should reject with invalid email', async () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'Family',
      email: 'username',
    });
    await expect(Reservations.validate(reservation))
      .rejects.toBeInstanceOf(Error);
  });
});


describe('create', () => {
  let Reservations;

  it('should reject if validation failed', async () => {
    Reservations = require('./reservations');

    // store the original function
    const original = Reservations.validate;
    const error = new Error('fail');

    // mock the validate function
    Reservations.validate = jest.fn(() => Promise.reject(error));

    await expect(Reservations.create())
      .rejects.toBe(error);

    expect(Reservations.validate).toBeCalledTimes(1);

    // restore
    Reservations.validate = original;
  });

  it('should reject if validation fails using spyOn', async () => {
    Reservations = require('./reservations');

    const mock = jest.spyOn(Reservations, 'validate');

    const error = new Error('fail');
    mock.mockImplementation(() => Promise.reject(error));

    const value = 'puppy';

    await expect(Reservations.create(value)).rejects.toEqual(error);
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(value);

    mock.mockRestore();
  });

  it('should create a reservation if there are no validation problems', async () => {
    // prepare to require
    const expectedInsertId = 1;
    const mockInsert = jest.fn().mockResolvedValue([expectedInsertId]);

    jest.mock('./knex', () => () => ({
      insert: mockInsert,
    }));
    Reservations = require('./reservations');

    // mock validation
    const mockValidation = jest.spyOn(Reservations, 'validate');
    mockValidation.mockImplementation(value => Promise.resolve(value));

    const reservation = { foo: 'bar' };

    // execute an check
    await expect(Reservations.create(reservation))
      .resolves.toStrictEqual(expectedInsertId);

    expect(mockValidation).toBeCalledWith(reservation);
    expect(mockValidation).toBeCalledTimes(1);

    mockValidation.mockRestore();
    jest.unmock('./knex');
  });
});
