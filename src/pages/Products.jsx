import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <h2>Caricamento...</h2>;
  if (error) return <h2>Errore: {error}</h2>;

  return (
    <section>
      <h1 className="mb-4">Prodotti</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "220px", objectFit: "contain" }}
              />

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-truncate">{product.description}</p>
                <p className="fw-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
