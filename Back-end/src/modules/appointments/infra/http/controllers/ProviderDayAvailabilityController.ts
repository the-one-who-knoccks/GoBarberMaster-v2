import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ProviderDayAvailabilitySerevice from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { provider_id } = req.params;
    const { day, month, year } = req.body;

    const listProviderDayAvailability = container.resolve(
      ProviderDayAvailabilitySerevice,
    );

    const availability = await listProviderDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });

    return res.json(availability);
  }
}
