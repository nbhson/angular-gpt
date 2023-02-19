import { Configuration, OpenAIApi } from "openai";
import { environment } from "src/environments/environment.prod";

const apiConfiguration = new Configuration({
  apiKey: environment.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(apiConfiguration);