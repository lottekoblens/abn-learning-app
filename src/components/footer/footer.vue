<template>
    <div class="footer d-flex justify-space-between">
        <button class="back-button"><img src="/home-icon.png"></button>
        <button class="back-button"><img src="/chat-icon.png"></button>
    </div>
</template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style>
  .footer {
     padding: 0 1em 1em 1em; 
  }

  .back-button {
    background: white;
    color: #7FCCAB;
    width: fit-content;
    border-radius: 0;
    background: linear-gradient(-135deg, transparent 10px, white 0);
    width: 58px;
    height: 48px;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>