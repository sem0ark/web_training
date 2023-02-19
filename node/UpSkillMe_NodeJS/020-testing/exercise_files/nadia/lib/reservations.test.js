const Reservations = require('./reservations');
const Reservation = require('./schema/reservation');

describe('validate', () => {
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
});

describe('validate async/await', () => {
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
  it('should reject if validation failed', async () => {
    // store the original function
    const original = Reservations.validate;
    const error = new Error('faile');

    // mock the validate function
    Reservations.validate = jest.fn(() => Promise.reject(error));

    await expect(Reservations.create())
      .rejects.toBe(error);

    expect(Reservations.validate).toBeCalledTimes(1);

    // restore
    Reservations.validate = original;
  });
});
