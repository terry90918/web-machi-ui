<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    @focus="$emit('onFocus')"
    @blur="$emit('onBlur')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'MaBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String as PropType<'success' | 'error' | 'warning' | 'info'>,
      default: 'info',
    },
  },
  emits: ['onPress', 'onFocus', 'onBlur'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (!props.disabled) {
        emit('onPress');
      }
    };

    const buttonClasses = computed(() => {
      return [
        'px-4 py-2 rounded',
        props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-75',
        {
          'bg-green-500 text-white': props.status === 'success',
          'bg-red-500 text-white': props.status === 'error',
          'bg-yellow-500 text-white': props.status === 'warning',
          'bg-blue-500 text-white': props.status === 'info',
        },
      ];
    });

    return {
      handleClick,
      buttonClasses,
    };
  },
});
</script>
