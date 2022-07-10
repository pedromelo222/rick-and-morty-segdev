<template>
  <div class="btn-group">
    <slot />
  </div>
</template>

<style>
    .btn-group{
        @apply flex;
    }
    .btn-group .btn:first-child {
        @apply !rounded-r-none;
    }
    .btn-group .btn:not(:first-child):not(:last-child) {
        @apply !rounded-none ;
    }
    .btn-group .btn:last-child {
        @apply !rounded-l-none;
    }
     .btn-group .btn:not(:first-child){
        @apply !border-l-[1px];
    }
    .btn-group .btn {
        @apply !px-3 sm:!px-6;
        box-shadow: 1px 3px 0px #000 !important;
    }

   .btn-group .btn:hover  {
        box-shadow: 1px 6px 0 0 #000 !important;
        -webkit-transform: translate(0px, -5px) !important;
        -ms-transform: translate(0px, -5px) !important;
        transform: translate(0px, -5px) !important;
    }

    .btn-group .btn:active {
        box-shadow: 0 0 0 0 #000 !important;
        -webkit-transform: translate(0px, 6px) !important;
        -ms-transform: translate(0px, 6px) !important;
        transform: translate(0px, 6px) !important;
    }
</style>
