import { Component } from '@angular/core';
import { ProductServiceService , Producto} from '../product-service.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  filtro: string = '';
  productos: Producto[] = [];

  constructor(private productoService: ProductServiceService) {}

  buscar(): void {
    if (this.filtro.trim() === '') {
      this.productos = []; // Limpia la tabla si no hay texto
      return;
    }

    this.productoService.findByProductName(this.filtro).subscribe(data => {
      this.productos = data;
    });
  }

}
