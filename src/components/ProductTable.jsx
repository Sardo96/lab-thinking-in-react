import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
            <table style={{ borderCollapse: 'collapse', width: '1000px' }}>
                <thead style={{ background: '#f2f2f2' }}>
                    <tr>
                        <th style={{ borderTop: '1px solid #ddd', borderBottom: '2px solid #ddd', borderLeft: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ borderTop: '1px solid #ddd', borderBottom: '2px solid #ddd', borderRight: '1px solid #ddd', padding: '8px' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductRow
                            key={product.id}
                            product={product}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;

