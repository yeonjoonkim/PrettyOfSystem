import { LanguageService } from 'src/app/service/global/language/language.service';
import { LoadingService } from '../global/loading/loading.service';
import { ToastService } from '../global/toast/toast.service';
import { Injectable } from '@angular/core';
import { openAiApi } from '../../../../openai-key';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  //API
  private readonly _openAiUrl: string = 'https://api.openai.com/v1/chat/completions';

  //API DEFAULT PARAM
  private readonly _defaultParams = {
    model: 'gpt-3.5-turbo-16k',
    temperature: 0.4,
    max_tokens: 16000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  //API DEFAULT HEADER
  private readonly _headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + openAiApi.key,
  };

  constructor(
    private toast: ToastService,
    private loading: LoadingService,
    private language: LanguageService
  ) {}

  /**This function is trigger api to receive answer from open ai */
  public async receiveResult(command: string, loading: boolean): Promise<string> {
    // Set api request
    let param = { ...this._defaultParams, ...{ messages: [{ role: 'system', content: command }] } };
    let requestOptions = this.setReqeustOptions(param);
    let apiResult: string = '';

    try {
      if (loading) {
        await this.loading.show();
      }
      const response = await Promise.race([
        fetch(this._openAiUrl, requestOptions),
        new Promise<never>(
          (_, reject) => setTimeout(() => reject(new Error('Request timed out')), 40000) // 5 second timeout
        ),
      ]);

      if (!response.ok) {
        this.loading.dismiss();
        let err = await this.language.transform('messagefail.description.apiresponsenotok');
        this.toast.presentError(err);
      } else {
        let data = await response.json();
        apiResult = data.choices[0].message.content;
        if (loading) {
          await this.loading.dismiss();
        }
      }
    } catch (error) {
      if (loading) {
        await this.loading.dismiss();
      }
      console.error(error);
    }

    return apiResult;
  }

  /**Set open ai api reqeust option */
  private setReqeustOptions(param: {}): {} {
    let requestOptions = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(param),
    };

    return requestOptions;
  }
}
