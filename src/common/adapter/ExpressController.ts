import { Request, Response } from 'express';
import { logger } from '../../infrastructure/logging/pinoLogger';

export const responseTypes = {
	json: 'application/json',
	text: 'text/plan',
};

export type CustomRequest = Request; // add extensions to request here

export abstract class ExpressController {
	protected logger = logger;

	protected abstract execImpl(request: CustomRequest, response: Response): Promise<void | unknown>;

	public async execute(request: CustomRequest, response: Response): Promise<void | unknown> {
		try {
			return await this.execImpl(request, response);
		} catch (e) {
			console.log('ExpressController.execute', e);
			return e;
		}
	}

	// response.status(), response.type(), etc. mutate response, so we don't need to return anything

	public respondOk<T>(response: Response, dto?: T) {
		if (dto) {
			response.status(200).type(responseTypes.json);
		}
		response.status(200);
	}

	public respondAccepted<T>(response: Response, dto?: T) {
		if (dto) {
			response.status(202).type(responseTypes.json);
		}
		response.status(202);
	}

	public respondBadRequest(response: Response) {
		response.status(400).type(responseTypes.json);
	}

	public respondServerError(response: Response) {
		response.status(500).type(responseTypes.json);
	}
}
