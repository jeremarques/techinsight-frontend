<template>
    <Button variant="ghost" size="sm" aria-label="Button" class="data-[active=true]:bg-accent rounded-none">
        <slot />
    </Button>    
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>