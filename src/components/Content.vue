<template>
  <header id="inicio" class="text-center mt-4">
    <div class="jumbotron">
      <h1 class="display-4">¡Bienvenidos al Restaurante!</h1>
      <p class="lead">
        Disfruta de nuestros exquisitos platos y del ambiente acogedor.
      </p>
      <a class="btn btn-primary btn-lg" href="#menu" role="button">Ver menú</a>
    </div>
  </header>

  <section id="menu" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Nuestro Menú</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4">
            <img
              src="../assets/food1.jpg"
              class="card-img-top"
              alt="Plato 1"
              style="height: 200px; object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title">Plato de Mariscos</h5>
              <p class="card-text">
                Exquisito plato de mariscos variado, acompañados de salsas y
                guarniciones.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img
              src="../assets/food2.jpg"
              class="card-img-top"
              alt="Plato 2"
              style="height: 200px; object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title">Cóctel de Camarones</h5>
              <p class="card-text">
                Refrescante cóctel de camarones, acompañado de una salsa
                especial y vegetales frescos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <img
              src="../assets/food3.jpg"
              class="card-img-top"
              alt="Plato 3"
              style="height: 200px; object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title">Plato de Pasta de Mariscos</h5>
              <p class="card-text">
                Deliciosa pasta con una variedad de mariscos frescos, en una
                salsa especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="reservaciones" class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Reservaciones</h2>
      <form>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div class="form-group">
          <label for="fecha">Fecha</label>
          <input type="date" class="form-control" id="fecha" />
        </div>
        <div class="form-group">
          <label for="personas">Número de personas</label>
          <input type="number" class="form-control" id="personas" min="1" />
        </div>
        <button type="submit" class="btn btn-primary mt-2">
          Hacer reserva
        </button>
      </form>
    </div>
  </section>

  <section id="contacto" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Contáctanos</h2>
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Ingresa tu email"
              />
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje</label>
              <textarea
                class="form-control"
                id="mensaje"
                rows="4"
                placeholder="Ingresa tu mensaje"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
              Enviar mensaje
            </button>
          </form>
        </div>
        <div class="col-md-6 mt-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Restaurante</h5>
              <p class="card-text">Dirección: Calle Principal, Ciudad, País</p>
              <p class="card-text">Teléfono: +1234567890</p>
              <p class="card-text">Email: info@restaurante.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
