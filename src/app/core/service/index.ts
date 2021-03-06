import { HttpClientService } from "./http-client.service";
import { AuthServices } from "./auth.service";
import { ProductServices } from "./product.service";
import { ArticleServices } from "./article.service";
import { OrderServices } from "./order.service";
import { SliderServices } from "./slider.service";
import { SeoServices } from "./seo.service";
import { MsgServices } from "./msg.service";

export const allServices = [
    HttpClientService, 
    AuthServices, 
    ProductServices, 
    ArticleServices, 
    OrderServices,
    SliderServices, 
    SeoServices,
    MsgServices
    
]

