import React, { useState } from 'react';

function Crud() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  const [saved, setSaved] = useState(false); // State untuk efek simpan

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const addItem = () => {
    if (input.name && input.email && input.message) {
      setItems([...items, input]);
      setInput({ name: '', email: '', message: '' });
      setSaved(true); // Efek berhasil disimpan
      setTimeout(() => setSaved(false), 3000); // Menghilangkan efek setelah 3 detik
    }
  };

  return (
    <section id="crud" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">CRUD Section</h2>
        
        {/* Formulir untuk menambahkan data */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control mb-2"
            name="name"
            placeholder="Enter your name"
            value={input.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-2"
            name="message"
            placeholder="Enter your message"
            rows="3"
            value={input.message}
            onChange={handleChange}
          ></textarea>
          <button
            onClick={addItem}
            className="btn btn-success btn-block"
          >
            Simpan
          </button>
        </div>

        {/* Pesan berhasil disimpan */}
        {saved && (
          <div className="alert alert-success" role="alert">
            Data berhasil disimpan!
          </div>
        )}

        {/* Daftar pesan yang telah dikirim */}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              <div>
                <strong>{item.name}</strong>
                <p>{item.email}</p>
                <p>{item.message}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Crud;
