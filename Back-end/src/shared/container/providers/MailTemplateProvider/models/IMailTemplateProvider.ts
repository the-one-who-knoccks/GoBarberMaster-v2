import IParseMailTemplateDTO from '../dtos/IParseMailTempalteDTO';

export default interface IMailTempalteProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
