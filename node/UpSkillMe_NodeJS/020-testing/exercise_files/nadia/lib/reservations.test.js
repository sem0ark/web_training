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
})
