// import IParseMailTemplateDTO from '../dtos/IParseMailTempalteDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Main Content';
  }
}

export default FakeMailTemplateProvider;
