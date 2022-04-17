import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { imageService } from "./Services/ImageService.js";

class App {
  todoController = new TodoController();
  weatherController = new WeatherController();
  clockController = new ClockController();
  quoteController = new QuoteController();
  imageControler= new ImageController();
  
  
}

window["app"] = new App();
