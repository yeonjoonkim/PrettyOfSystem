import { LanguageService } from 'src/app/shared/services/language/language.service';
import { LoadingService } from './../loading/loading.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class OpenAiService {
  //API
  private readonly openAiUrl: string = 'https://api.openai.com/v1/completions';
  private readonly apiKey: string = '';

  //API DEFAULT PARAM
  private readonly defaultParams = {
    model: "text-davinci-003",
    temperature: 0.4,
    max_tokens: 3800,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  //API DEFAULT HEADER
  private readonly headers =  {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.apiKey
  }

  constructor(private toast: ToastService, private loading: LoadingService, private language: LanguageService) {}

  /**This function is trigger api to receive answer from open ai */
  public async receiveResult(command: string): Promise<string>{
    //Set api request
    let param = { ...this.defaultParams, ...{prompt: command}};
    let requestOptions = this.setReqeustOptions(param);
    let apiResult: string = '';

    //fetch api with request
    await fetch(this.openAiUrl, requestOptions).then(async result => {
      if(!result.ok){
        this.loading.dismiss();
        let err = await this.language.transform('message.error.api');
        this.toast.presentError(err);
      }else{
        let data = await result.json();
        apiResult = data.choices[0].text;
      }
    })
    return apiResult;
  }

  /**Set open ai api reqeust option */
  private setReqeustOptions(param: {}): {}{
    let requestOptions = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(param)
    };

    return requestOptions;
  }

}

