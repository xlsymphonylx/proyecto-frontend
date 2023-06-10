<script setup>
import Swal from "sweetalert2";
import FeedbackForm from "./components/FeedbackForm.vue";
import Navbar from "./components/Navbar.vue";
import { submitFeedback } from "./services/feedbackService";

const showResult = async (feedback) => {
  const { result } = await submitFeedback(feedback);

  Swal.fire({
    title: result === "Positivo" ? "Positivo" : "Negativo",
    text:
      result === "Positivo"
        ? "El resultado del comentario es positivo"
        : "El resultado del comentario es negativo",
    icon: result === "Positivo" ? "success" : "error",
  });
};
</script>

<template>
  <div><Navbar /> <feedback-form @feedback="showResult" /></div>
</template>
