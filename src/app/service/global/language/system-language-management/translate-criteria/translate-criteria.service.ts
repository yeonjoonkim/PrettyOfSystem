import { Injectable } from '@angular/core';
import { SystemLanguageStorageService } from '../system-language-storage/system-language-storage.service';
import { ILanguageTranslatedCriteria, ILanguageTranslatedFormatCriteria } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
@Injectable({
  providedIn: 'root',
})
export class TranslateCriteriaService {
  constructor(private _storage: SystemLanguageStorageService) {}

  async allLanguageCriteria(key: string): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.map(s => s.code.toLowerCase());
    let nameList: string[] = selections.map(s => s.name);
    let format: ILanguageTranslatedFormatCriteria = this.setLanguageTranslatedFormatCriteria(key);
    return { code: codeList, name: nameList, format: format };
  }

  public async allLanguageTitleCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.map(s => s.code.toLowerCase());
    let nameList: string[] = selections.map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isTitle = true;

    return { code: codeList, name: nameList, format: format };
  }

  async allLanguageDescriptionCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.map(s => s.code.toLowerCase());
    let nameList: string[] = selections.map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isDescription = true;

    return { code: codeList, name: nameList, format: format };
  }

  async allLanguageLowerCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.map(s => s.code.toLowerCase());
    let nameList: string[] = selections.map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isLower = true;

    return { code: codeList, name: nameList, format: format };
  }

  async allLanguageUpperCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.map(s => s.code.toLowerCase());
    let nameList: string[] = selections.map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isUpper = true;

    return { code: codeList, name: nameList, format: format };
  }

  async defaultLanguageCriteria(key: string): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.filter(s => s.isDefault).map(s => s.code.toLowerCase());
    let nameList: string[] = selections.filter(s => s.isDefault).map(s => s.name);
    let format: ILanguageTranslatedFormatCriteria = this.setLanguageTranslatedFormatCriteria(key);
    return { code: codeList, name: nameList, format: format };
  }

  async defaultLanguageUpperCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.filter(s => s.isDefault).map(s => s.code.toLowerCase());
    let nameList: string[] = selections.filter(s => s.isDefault).map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isUpper = true;

    return { code: codeList, name: nameList, format: format };
  }

  async defaultLanguageLowerCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.filter(s => s.isDefault).map(s => s.code.toLowerCase());
    let nameList: string[] = selections.filter(s => s.isDefault).map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isLower = true;

    return { code: codeList, name: nameList, format: format };
  }

  async defaultLanguageTitleCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.filter(s => s.isDefault).map(s => s.code.toLowerCase());
    let nameList: string[] = selections.filter(s => s.isDefault).map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isTitle = true;

    return { code: codeList, name: nameList, format: format };
  }

  async defaultLanguageDescriptionCriteria(): Promise<ILanguageTranslatedCriteria> {
    let selections = await this._storage.getSelections();
    let codeList: string[] = selections.filter(s => s.isDefault).map(s => s.code.toLowerCase());
    let nameList: string[] = selections.filter(s => s.isDefault).map(s => s.name);
    let format = this.defaultLanguageTranslatedFormatCriteria();
    format.isDescription = true;

    return { code: codeList, name: nameList, format: format };
  }

  private setLanguageTranslatedFormatCriteria(key: string): ILanguageTranslatedFormatCriteria {
    return {
      isDescription: key.includes(Constant.Text.Format.Description),
      isTitle: key.includes(Constant.Text.Format.Title),
      isLower: key.includes(Constant.Text.Format.Lower),
      isUpper: key.includes(Constant.Text.Format.Upper),
    };
  }

  private defaultLanguageTranslatedFormatCriteria(): ILanguageTranslatedFormatCriteria {
    return {
      isDescription: false,
      isTitle: false,
      isLower: false,
      isUpper: false,
    };
  }
}
