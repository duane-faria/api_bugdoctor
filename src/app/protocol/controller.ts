import { Request, Response } from 'express'

export interface Controller {
  index: (request: Request, response: Response) => Promise<any>
  store: (request: Request, response: Response) => Promise<any>
  delete: (request: Request, response: Response) => Promise<any>
  update: (request: Request, response: Response) => Promise<any>
}
