function ProductRow({ product }) {
  const { name, price, inStock } = product;
  const textColor = inStock ? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: textColor, borderTop: '1px solid #ddd', borderBottom: '2px solid #ddd', border: '1px solid #ddd', padding: '8px' }}>{name}</td>
      <td style={{ borderTop: '1px solid #ddd', borderBottom: '2px solid #ddd', borderRight: '1px solid #ddd', padding: '8px' }}>{price}</td>
    </tr>
  );
}

export default ProductRow;
