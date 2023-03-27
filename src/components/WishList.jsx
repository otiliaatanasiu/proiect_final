import React from 'react'
import { Table } from 'reactstrap';

function WishList() {

 return (
    <div>
      <img className='d-block w-50' style={{marginLeft:'500px', marginTop:'20px'}}
      src={'https://cdn.stocksnap.io/img-thumbs/960w/silver-abstract_HAMK06NUZW.jpg'} alt="Wishlist" />

<Table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Jacob</td>
         
        </tr>
      </tbody>
    </Table>
  

    </div>
 );
}


export default WishList;


