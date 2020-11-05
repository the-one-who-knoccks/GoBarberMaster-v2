import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppontmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppontmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppontmentsRepository,
    );
  });

  it('It should be able to list the available month of the provider ', async () => {
    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 8, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 9, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 10, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 11, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 12, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 13, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 14, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 15, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 16, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 20, 17, 0, 0),
    });

    await fakeAppontmentsRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 9, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 10,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
