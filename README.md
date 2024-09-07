
-objetivos pendientes :

1.100% Reponsive en todos los components.
    -CardItemDetail.
    -List Item
    -Detalle de compra



2.Agregar Validacion en detailitem cuando item.stock==0 <Button a{adir al carrito bloquear}>

3.Desaparecer carwidget en checkOut

4.Agregar Redireccionamiento al presionar confirmar pedido.

5.Agregar un span de Stock:

6:Agregar funcionalidades para ocultar boton dependiendo del item.stock


            <div className='InputForm'>
              <span className='spanOrderForm'>Mail</span>
              <input type='email' className='inputOrderForm' onChange={(e) => setEmail(e.target.value)} />
            </div>




sass --watch src/assets/sass/component/cartItemDetail.scss src/styles/cartItemDetail.css
sass --watch src/index.scss src/index.css

sass --watch src/assets/sass/component/ProductosMain.scss src/styles/ProductosMain.css

sass --watch src/assets/sass/component/PayDetail.scss src/styles/PayDetail.css

sass --watch src/assets/sass/component/CheckOut.scss src/styles/CheckOut.css

sass --watch src/assets/sass/component/NavBar.scss src/styles/NavBar.css
CheckOut.scss