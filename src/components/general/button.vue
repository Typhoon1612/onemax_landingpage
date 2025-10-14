<template>
  <button
    :class="['omx-btn', variant, { 'omx-btn--block': block }]"
    :type="type"
    @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import { defineProps, withDefaults, defineEmits } from "vue";

  withDefaults(
    defineProps<{
      type?: "button" | "submit" | "reset";
      variant?: "primary" | "outline";
      block?: boolean;
    }>(),
    {
      type: "button",
      variant: "primary",
      block: false,
    }
  );

  defineEmits(["click"]);
</script>

<style scoped>
  .omx-btn {
    display: inline-block;
    padding: 1rem 3rem;
    font-size: 1.3rem;
    font-weight: 550;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px 0 rgba(123, 97, 255, 0.15);
    border: 2px solid transparent;
    background: #7b61ff;
    color: #fff;
  }
  .omx-btn:hover {
    background: transparent;
    color: #7b61ff;
    border: 2px solid #7b61ff;
    box-shadow: none;
  }
  .omx-btn:active {
    background: #7b61ff;
    color: #fff;
    border: 2px solid transparent;
    box-shadow: 0 4px 24px 0 rgba(123, 97, 255, 0.15);
  }
  .omx-btn.outline {
    background: transparent;
    color: #7b61ff;
    border: 2px solid #7b61ff;
    box-shadow: none;
  }
  .omx-btn.outline:hover {
    background: #7b61ff;
    color: #fff;
    border: 2px solid transparent;
  }
  .omx-btn--block {
    display: block;
    width: 100%;
  }
</style>
