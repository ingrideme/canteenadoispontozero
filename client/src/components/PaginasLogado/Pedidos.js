import React from 'react';
import './Pedidos.css';


function Pedidos() {
    return (


<body>
<div class="table-title">
<h3>Histórico de Pedidos</h3>
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">ID Pedido</th>
<th class="text-left">Data da compra</th>
<th class="text-left">Data da retirada</th>
<th class="text-left">Total</th>
<th class="text-left">QR Code</th>

</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">001</td>
<td class="text-left">07/09/2020</td>
<td class="text-left">08/09/2020</td>
<td class="text-left">R$ 13,00</td>
<td class="text-left">QR</td>   

</tr>
<tr>
<td class="text-left">002</td>
<td class="text-left">08/09/2020</td>
<td class="text-left">10/09/2020</td>
<td class="text-left">R$ 8,00</td>
<td class="text-left">QR</td>

</tr>
<tr>
<td class="text-left">003</td>
<td class="text-left">17/09/2020</td>
<td class="text-left">17/09/2020</td>
<td class="text-left">R$ 11,00</td>
<td class="text-left">QR</td>

</tr>
</tbody>
</table>
  

</body>    )
}

export default Pedidos
