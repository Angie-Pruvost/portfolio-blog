"use client";

import { useEffect, useState } from "react";

export default function Comments({ postId }) {

  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    content: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/comments")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(c => c.postId === postId);
        setComments(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [postId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.content) {
      alert("Completá los campos");
      return;
    }

    const newComment = {
      ...form,
      postId
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    });

    const saved = await res.json();

    setComments([...comments, saved]);
    setForm({ name: "", content: "" });
  };

  return (
    <section className="comments">

      <h2>Comentarios</h2>

      {loading ? (
        <p>Cargando comentarios...</p>
      ) : comments.length === 0 ? (
        <p>No hay comentarios todavía</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="comment">
            <strong>{c.name}</strong>
            <p>{c.content}</p>
          </div>
        ))
      )}

      {/* FORMULARIO 🔥 */}
      <form onSubmit={handleSubmit} className="comment-form">

        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Escribí un comentario..."
          value={form.content}
          onChange={handleChange}
        />

        <button type="submit">Comentar</button>

      </form>

    </section>
  );
}