<script setup>
import { ref, getCurrentInstance } from "vue";

const name = ref("");
const email = ref("");
const feedback = ref("");
const instance = getCurrentInstance();
const submitFeedback = () => {
  instance.emit("feedback", feedback.value);
};
</script>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Comentarios a Restaurante</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="feedback" class="form-label">Comentario</label>
            <textarea
              class="form-control"
              id="feedback"
              rows="5"
              v-model="feedback"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="submitFeedback"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
