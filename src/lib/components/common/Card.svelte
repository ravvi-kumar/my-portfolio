<script lang="ts">
  import type { CardVariant } from '$lib/types/index';

  export let variant: CardVariant = 'default';
  export let padding: 'small' | 'medium' | 'large' = 'medium';
  export let class: string = '';

  const variantClasses = {
    default: 'bg-primary',
    elevated: 'bg-primary shadow-lg',
    outlined: 'bg-primary border border-secondary'
  };

  const paddingClasses = {
    small: 'p-4',
    medium: 'p-4 md:p-6',
    large: 'p-6 md:p-8'
  };

  const baseClasses = 'rounded-card';

  $: cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${class}`;
</script>

<div class={cardClasses}>
  <slot />
</div>