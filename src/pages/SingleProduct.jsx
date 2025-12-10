import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <h2>Caricamento prodotto...</h2>;
  if (error) return <h2>Errore: {error}</h2>;
  if (!product) return <h2>Prodotto non trovato</h2>;

  return (
  <section className="row g-4 align-items-center">

    <div className="col-md-5">
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid rounded-4 p-3 bg-white"
      />
    </div>

    <div className="col-md-7">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  </section>
);
}
