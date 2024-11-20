import { IInstrumentationService } from "@/src/application/services/instrumentation.service.interface";
import { Product } from "@/src/entities/models/product";
import { format } from "date-fns";

export const presenter = (
  products: Product[],
  instrumentationService: IInstrumentationService
) => {
  return instrumentationService.startSpan(
    { name: 'getAllProducts Presenter', op: 'serialize' },
    () =>
      products.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description,
        price: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(
          p.price,
        ),
        createdAt: format(p.created_at, 'MM/dd/yyyy')
      }))
  );
}