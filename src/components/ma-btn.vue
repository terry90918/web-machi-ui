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
import { defineComponent, computed, type PropType } from 'vue';

export interface MaBtnProps {
  disabled?: boolean;
  status?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

export default defineComponent({
  name: 'MaBtn',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String as PropType<'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'>,
      default: 'default',
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
          'bg-gray-200': props.status === 'default',
          'bg-primary text-white': props.status === 'primary',
          'bg-secondary text-white': props.status === 'secondary',
          'bg-accent text-white': props.status === 'accent',
          'bg-info text-white': props.status === 'info',
          'bg-success text-white': props.status === 'success',
          'bg-warning text-white': props.status === 'warning',
          'bg-error text-white': props.status === 'error',
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
